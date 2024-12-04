/* eslint-disable no-unused-vars */
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function insertGuest(guestInfo) {
  const { data, error } = await supabase.from("guests").insert(guestInfo).select();
  const guest = data[0];
  return { guest, error };
}
export async function insertGuests(guests) {
  const { data, error } = await supabase.from("guests").insert(guests);
  return { data, error };
}
export async function deleteGuests() {
  const { error } = await supabase.from("guests").delete().gt("id", 0);
  if (error) console.log(error.message);
}
export async function getGuestsByPattern({ search }) {
  let query = supabase
    .from('guests')
    .select('*');


  if (search) {
    const pattern = `%${search}%`;
    query = isNaN(Number(search)) ? query.ilike('fullName', pattern) : query.eq('nationalID', search);
    const { data, error } = await query;
    if (error) {
      console.log(error.message);
      throw new Error("Guests could not be fetched");
    }
    return data;
  }
  return null;
}

export async function getGuests({ sortBy, page }) {
  let query = supabase
    .from('guests')
    .select('*', { count: "exact" });



  if (sortBy) {
    query = query.order(sortBy.field, { ascending: sortBy.order === 'asc' });
  }
  if (page) {
    const from = PAGE_SIZE * page - 1 * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error.message);
    throw new Error("Guests could not be fetched");
  }
  return { data, count };
}
