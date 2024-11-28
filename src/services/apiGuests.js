/* eslint-disable no-unused-vars */
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
export async function getGuests({ sortBy }) {
  let query = supabase
    .from('guests')
    .select('*', { count: "exact" });

  if (sortBy) {
    query = query.order(sortBy.field, { ascending: sortBy.order === 'asc' });
  }
  const { data, error, count } = await query;
  if (error) {
    console.log(error.message);
    throw new Error("Guests could not be fetched");
  }
  return { data, count };
}
