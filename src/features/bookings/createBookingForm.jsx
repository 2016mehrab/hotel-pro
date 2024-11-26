/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import Select from "../../ui/Select";
import { differenceInDays, isSameMonth } from "date-fns";
import { isDateBetween } from "../../utils/helpers";
import useInsertBooking from "./useInsertBooking";
import { useEffect, useState } from "react";
// TODO: first register guest , then bookings from api

const paidStatus = [
  { label: 'Will pay at property', value: false },
  { label: 'Paid', value: true },
]
function CreateBookingForm({ cabinToEdit = {}, closeModal, settings = {}, cabins = {}, bookings = {} }) {

  const { maxGuestsPerBooking, minNightsPerBooking } = settings;
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);
  const { formState, register, handleSubmit, reset, getValues, watch } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const bookingDate = watch('startDate');
  const { errors } = formState;


  function formatData(data) {
    const formatedData = data.map(cabin => {
      return {
        label: cabin.name,
        value: cabin.id,
        price: Math.round(Number(cabin.price) * Number(cabin.discount) / 100)
      }
    });
    return formatedData;
  }

  /* TODO: fix proper cabin filtering
   * get all the bookings - DONE
   * put the cabinIds in a set-DONE
   * first filter out the cabins which are not in bookings and append it with-DONE
   * filter out the cabins which are not booked in the bookedDate
   * that is bookedDate is not between any of the bookings start and end date.
   * FIX: RefinedCabins adding duplicates ! -DONE
   *
   */
  //TODO: HAVE TO ALSO CHECK IF ENDDATE OVERLAPS WITH ANY START TO END DATE

  function filterCabins(selectedDate, bookings) {
    const bookedCabinSet = new Set();
    const sameMonthBookings = [];

    bookings.map(bookedcabin => {
      isSameMonth(new Date(selectedDate), new Date(bookedcabin.startDate)) ? sameMonthBookings.push(bookedcabin) : null;
      return !bookedCabinSet.add(bookedcabin.cabinId)
    });
    let refinedCabins = new Map();
    cabins.forEach(cabin => {
      if (!bookedCabinSet.has(cabin.id)) {
        refinedCabins.set(cabin.id, cabin);
      }
    })
    if (sameMonthBookings.length === 0) return cabins;
    sameMonthBookings.map(booking => {
      if (!isDateBetween(selectedDate, booking.startDate, booking.endDate)) {
        refinedCabins.has(booking.cabinId) ? null : refinedCabins.set(booking.cabinId,
          booking.cabins);
      }
    })
    return refinedCabins;
  }



  {/*TODO: Add useInsertBooking */ }
  const { insertBooking, isInserting } = useInsertBooking();
  {/*TODO: Add useUpdateBooking */ }
  //const { mutate: updateCabin, isLoading: isEditing } = useUpdateCabin();
  //const isWorking = isCreating || isEditing;

  const isWorking = false;

  function onsubmit(data) {
    data = {
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      status: "unconfirmed",
      hasBreakfast: false
    }
    console.log('form submitted! ')
    console.table(data);
  }
  const [filteredCabins, setFilteredCabins] = useState(cabins);
  useEffect(() => {

    if (bookingDate) {
      const cabinsMap = filterCabins(bookingDate, bookings);
      const availableCabins = Array.from(cabinsMap.values());
      setFilteredCabins(availableCabins);
    }
  }, [bookingDate, bookings]);

  return (
    <Form onSubmit={handleSubmit(onsubmit)} type={closeModal ? "modal" : "regular"}>
      {/* Guest Information */}
      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isWorking}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isWorking}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="National ID" error={errors?.nationalID?.message}>
        <Input
          type="text"
          id="nationalID"
          disabled={isWorking}
          {...register("nationalID")}
        />
      </FormRow>
      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input
          type="text"
          id="nationality"
          disabled={isWorking}
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* Booking Information */}
      <FormRow label="Start Date" error={errors?.startDate?.message}>
        <Input
          type="date"
          id="startDate"
          disabled={isWorking}
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="End Date" error={errors?.endDate?.message}>
        <Input
          type="date"
          id="endDate"
          disabled={isWorking}
          {...register("endDate", {
            required: "This field is required",
            validate: (value) => {
              return differenceInDays(value, getValues.startDate) >= minNightsPerBooking || `Please ensure booking is for at least ${minNightsPerBooking} days`
            }
          })}
        />
      </FormRow>

      <FormRow label="Number of Guests" error={errors?.numGuests?.message}>
        <Input
          type="number"
          id="numGuests"
          disabled={isWorking}
          {...register("numGuests", {
            required: "This field is required",
            max: {
              value: maxGuestsPerBooking,
              message: `Guests should be at most ${maxGuestsPerBooking} per booking`,
            },
          })}
          max={maxGuestsPerBooking}
          min={1}
          defaultValue={1}
        />
      </FormRow>
      <FormRow label="Total Price" error={errors?.totalPrice?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isWorking}
          {...register("totalPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Payment Status" error={errors?.isPaid?.message}>
        <Select
          id="isPaid"
          options={paidStatus}
          disabled={isWorking}
          {...register("isPaid", {
            required: "This field is required",
          })}
          defaultValue={false}
        />
      </FormRow>
      <FormRow label="Observations" error={errors?.observations?.message}>
        <Textarea
          style={{ resize: "none" }}
          id="observations"
          disabled={isWorking}
          {...register("observations")}
        />
      </FormRow>

      {/* Cabin Selection */}
      {filteredCabins.length > 0 ?
        <FormRow label="Select Cabin" error={errors?.cabinId?.message}>
          <Select
            id="cabinId"
            options={formatData(filteredCabins)}
            disabled={isWorking}
            {...register("cabinId", {
              required: "This field is required",
            })}
          />
        </FormRow>
        :
        <p>No cabin available for the selected month</p>

      }

      {/* Buttons */}
      <FormRow>
        <Button
          onClick={() => closeModal?.()}
          disabled={isWorking}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit Booking" : "Create Booking"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
