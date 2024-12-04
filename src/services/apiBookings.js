/* eslint-disable no-unused-vars */
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import { insertGuest } from "./apiGuests";
import supabase from "./supabase";

export async function createGuestAndBooking(data) {
  // Bookings need a guestId and a cabinId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and cabinIds, and then replace the original IDs in the booking data with the actual ones from the DB

  const guestData = {
    fullName: data.fullName,
    email: data.email,
    nationality: data.nationality,
    nationalID: data.nationalID,
  }

  const { guest, error: insertGuestError } = await insertGuest(guestData);
  if (insertGuestError) {
    console.log(insertGuestError.message)
    throw new Error("Cabin booking failed");
  }
  const bookingData = {
    startDate: data.startDate,
    endDate: data.endDate,
    guestId: guest.id,
    cabinId: data.cabinId,
    status: data.status,
    isPaid: data.isPaid,
    observations: data.observations,
    totalPrice: data.totalPrice,
    numNights: data.numNights,
    numGuests: data.numGuests,
    hasBreakfast: data.hasBreakfast,
  }
  const { error } = await supabase.from("bookings").insert(bookingData);
  if (error) {
    console.log(error.message);
    throw new Error("Cabin booking failed");
  }

}

export async function createBooking(data) {
  const guestId = data?.guest?.id;

  const bookingData = {
    startDate: data.startDate,
    endDate: data.endDate,
    guestId,
    cabinId: data.cabinId,
    status: data.status,
    isPaid: data.isPaid,
    observations: data.observations,
    totalPrice: data.totalPrice,
    numNights: data.numNights,
    numGuests: data.numGuests,
    hasBreakfast: data.hasBreakfast,
  }
  const { error } = await supabase.from("bookings").insert(bookingData);
  if (error) {
    console.log(error.message);
    throw new Error("Cabin booking failed");
  }

}
export async function getAllBookings() {
  const { data, error } = await supabase.from("bookings").select("*, cabins(*), guests(*)");
  if (error) {
    console.log(error.message);
    throw new Error("bookings could not be fetched");
  }
  return data;
}

export async function getBookings({ filter, sortBy, page }) {
  // const { data, error } = await supabase.from("bookings").select("*, cabins(*), guests(*)");
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName,email)", {
      count: "exact",
    });

  if (filter) {
    query = query[filter.method || "eq"](filter.field, filter.value);
  }
  if (sortBy) {
    query = query.order(sortBy.field, { ascending: sortBy.order === "asc" });
  }
  if (page) {
    const from = PAGE_SIZE * (page - 1);
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not loaded");
  }
  return { data, count };
}
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    // .select('*')
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}


/* SELECT 
  bookings.*, 
  guests.fullName, 
  guests.nationality, 
  guests.countryFlag
FROM 
  bookings
LEFT JOIN 
  guests 
ON 
  bookings.guest_id = guests.id
WHERE 
  (status = 'unconfirmed' AND startDate = CURRENT_DATE)
  OR 
  (status = 'checked-in' AND endDate = CURRENT_DATE)
ORDER BY 
  created_at; */

// Activity means that there is a check in or a check out (for those who are already checked-in) today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);


  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
