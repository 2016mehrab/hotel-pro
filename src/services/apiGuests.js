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
