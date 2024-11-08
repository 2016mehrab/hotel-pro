/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
export async function insertCabin(cabinData, id) {
  console.log("cabin-data", cabinData, "id", id);
  const hasImagePath = cabinData?.image?.startsWith?.(supabaseUrl);

  let query = supabase.from("cabins");
  // '/' to make sure supabase don't create directory
  const imageName = `${Math.random()}-${cabinData.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? cabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  console.log("image",imageName,imagePath);
  // create cabin
  if (!id) {
    query = query.insert([{ ...cabinData, image: imagePath }]);
  }
  // update cabin
  if (id) {
    query = query.update({ ...cabinData, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image);
  // delete the whole cabin row if there was any issue uploading to bucket
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", cabinData.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }
  return data;
}

export async function updateCabin({ updateData, id }) {
  const { data, error } = await supabase
    .from("cabins")
    .update(updateData)
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be updated");
  }

  return data;
}
