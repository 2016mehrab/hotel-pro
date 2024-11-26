/* eslint-disable no-unused-vars */
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function insertGuests(guest) {
  const { data, error } = await supabase.from("guests").insert(guest);
  return { data, error };
}
export async function deleteGuests() {
  const { error } = await supabase.from("guests").delete().gt("id", 0);
  if (error) console.log(error.message);
}
