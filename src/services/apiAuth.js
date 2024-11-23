/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw new Error(error.message);
  return data?.user;

}

export async function getCurrentUser() {
  const { data: sessionData } = await supabase.auth.getSession()
  if (!sessionData.session) {
    return null;
  }
  const { data: userData, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }
  return userData?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message);

}
