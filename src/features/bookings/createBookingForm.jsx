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
import { useEffect, useMemo, useState } from "react";
// TODO: first register guest , then bookings from api

const paidStatus = [
  { label: 'Will pay at property', value: false },
  { label: 'Paid', value: true },
]
function CreateBookingForm({ cabinToEdit: bookingToEdit = {}, closeModal, settings = {}, cabins = {}, bookings = {} }) {
  console.log('CreateBookingForm rerendered!');
  const { maxGuestsPerBooking, minNightsPerBooking, maxNightsPerBooking } = settings;
  const { id: editId, ...editValues } = bookingToEdit;

  const isEditSession = Boolean(editId);
  const { formState, register, handleSubmit, reset, getValues, watch, setValue, clearErrors } = useForm({
    defaultValues: isEditSession ? editValues : {
      fullName: "",
      email: "",
      startDate: "",
      endDate: "",
      numGuests: 1,
      totalPrice: 0,
      isPaid: false,
      observations: "",
    },
  });

  const { errors } = formState;

  function filterCabins(startDate, endDate, numGuests, bookings, cabins) {
    const bookedCabinSet = new Set();
    const sameMonthBookings = [];
    let refinedCabins = new Map();
    bookings.map(bookedcabin => {
      // adding everything to samemonthbookings because if a cabin is not booked in the searching month then that means it's free.
      isSameMonth(new Date(startDate), new Date(bookedcabin.startDate)) ? sameMonthBookings.push(bookedcabin) : sameMonthBookings.push(bookedcabin);
      return bookedCabinSet.add(bookedcabin.cabinId)
    });
    // first adding cabins which have not been booked
    cabins.forEach(cabin => {
      if (!bookedCabinSet.has(cabin.id)) {
        refinedCabins.set(cabin.id, cabin);
      }
    })

    // adding cabins from the booked cabins which are free on the given dates
    sameMonthBookings.map(booking => {
      if (!isDateBetween(startDate, booking.startDate, booking.endDate) && !isDateBetween(endDate, booking.startDate, booking.endDate)) {
        console.log('valid cabins', booking);
        refinedCabins.has(booking.cabinId) ? null : refinedCabins.set(booking.cabinId,
          booking.cabins);
      }
    })
    refinedCabins = Array.from(refinedCabins.values());
    refinedCabins = refinedCabins.filter(cabin => {
      return cabin.capacity >= numGuests;
    })
    return refinedCabins;
  }

  function formatData(data) {
    const formatedData = data.map(cabin => {
      const price = cabin.price - Math.round(Number(cabin.price) * Number(cabin.discount) / 100)
      return {
        label: cabin.name,
        value: `${cabin.id}-${price}`,
      }
    });
    return formatedData;
  }
  {/*TODO: Add useInsertBooking */ }
  const { insertBooking, isInserting } = useInsertBooking();
  {/*TODO: Add useUpdateBooking */ }
  //const { mutate: updateCabin, isLoading: isEditing } = useUpdateCabin();
  //const isWorking = isCreating || isEditing;

  const isWorking = false;

  function onsubmit(data) {
    const [cabinId, ...rest] = data.cabinId.split('-');
    data = {
      ...data,
      cabinId: Number(cabinId),
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      numNights: differenceInDays(data.endDate, data.startDate),
      status: "unconfirmed",
      hasBreakfast: false
    }
    insertBooking({ ...data });
    console.log('form submitted! ')
    console.table(data);
    reset();
    setCabinPrice(0);
  }

  const selectedStartDate = watch('startDate');
  const selectedEndDate = watch('endDate');
  const selectedCabin = watch('cabinId');
  const selectedNumGuests = watch('numGuests');
  const [cabinPrice, setCabinPrice] = useState(0);
  const validCabins = useMemo(() => {
    if (selectedStartDate && selectedEndDate) {

      return filterCabins(selectedStartDate, selectedEndDate, selectedNumGuests, bookings, cabins);
    }
    return [];
  }, [selectedStartDate, selectedEndDate, selectedNumGuests, bookings, cabins]);

  useEffect(() => {
    if (selectedCabin) {
      let [_, price] = selectedCabin.split('-');
      price = Number(price);
      console.log("price", price)
      setCabinPrice(price);
      setValue("totalPrice", price);
    }
  }, [selectedCabin, setValue, setCabinPrice])


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
          {...register("nationalID", {
            required: "This field is required",
          })}
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
          onClick={() => clearErrors('endDate')}
          {...register("endDate", {
            required: "This field is required",
            validate: (value) => {
              const duration = differenceInDays(new Date(value), new Date(getValues().startDate));
              return (duration >= minNightsPerBooking && duration <= maxNightsPerBooking) || `Booking must be between ${minNightsPerBooking} and ${maxNightsPerBooking} nights.`
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
          defaultValue={cabinPrice}
          min={cabinPrice}


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
          {...register("isPaid")}
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
      {validCabins.length > 0 ?
        <FormRow label="Select Cabin" error={errors?.cabinId?.message}>
          <Select
            id="cabinId"
            options={formatData(validCabins)}
            disabled={isWorking}

            {...register("cabinId", {
              required: "This field is required",
            })}
          />
        </FormRow>
        :
        (selectedStartDate && selectedEndDate) ?
          (<p>No cabin available.</p>) :
          (<p>Please select booking date to select cabin</p>)

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
