/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import Select from "../../ui/Select";
import { differenceInDays } from "date-fns";
import { isDateBetween } from "../../utils/helpers";
import useInsertBooking from "./useInsertBooking";
import { useEffect, useMemo, useState } from "react";
import SearchSelect from "../../ui/SearchSelect";

const paidStatus = [
  { label: 'Will pay at property', value: false },
  { label: 'Paid', value: true },
]


function CreateBookingForm({ bookingToEdit = {}, closeModal, guests = {}, settings = {}, cabins = {}, bookings = {} }) {

  const { maxGuestsPerBooking, minNightsPerBooking, maxNightsPerBooking } = settings;
  const { id: editId, ...editValues } = bookingToEdit;

  const isEditSession = Boolean(editId);
  const { formState, register, handleSubmit, reset, getValues, watch, setValue, clearErrors } = useForm({
    defaultValues: isEditSession ? editValues : {
      email: "",
      startDate: "",
      endDate: "",
      numGuests: 1,
      isPaid: false,
      observations: "",
    },
  });

  const { errors } = formState;

  function filterCabins(startDate, endDate, numGuests, bookings, cabins) {

    // Add all cabins having numGuests capacity in a set
    const validCabinMap = new Map();
    cabins.forEach(cabin => {
      if (cabin.capacity >= numGuests) {
        validCabinMap.set(cabin.id, cabin);
      }
    })

    // remove cabins from valid cabin map if it is booked
    bookings.forEach(booking => {
      if (isDateBetween(startDate, booking.startDate, booking.endDate) || isDateBetween(endDate, booking.startDate, booking.endDate)) {
        validCabinMap.delete(booking.cabinId);
      }
    })

    return Array.from(validCabinMap.values());
  }

  function formatData(data) {
    const formatedData = data.map(cabin => {
      let price = cabin.price - Math.round(Number(cabin.price) * Number(cabin.discount) / 100)
      return {
        label: cabin.name,
        value: `${cabin.id}-${price}`,
      }
    });
    return formatedData;
  }

  function formatGuestData(data) {
    const formatedData = data.map(guest => {
      return {
        label: `${guest.fullName}-${guest.nationalID}`,
        value: guest,
      }
    });
    return formatedData;
  }
  const { insertBooking, isInserting } = useInsertBooking();

  const isWorking = false;

  function onsubmit(data) {

    console.table(JSON.parse(data.guest));
    let { guest } = data;
    delete data.guest;
    guest = JSON.parse(guest);
    const [cabinId, ...rest] = data.cabinId.split('-');
    data = {
      ...data,
      guest,
      cabinId: Number(cabinId),
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      numNights: differenceInDays(data.endDate, data.startDate),
      status: "unconfirmed",
      hasBreakfast: false
    }
    insertBooking({ ...data });
    reset();
    setCabinPrice(0);
  }

  const selectedStartDate = watch('startDate');
  const selectedEndDate = watch('endDate');
  const selectedNumGuests = watch('numGuests');
  const [cabinPrice, setCabinPrice] = useState();
  const validCabins = useMemo(() => {
    if (selectedStartDate && selectedEndDate) {
      return filterCabins(selectedStartDate, selectedEndDate, selectedNumGuests, bookings, cabins);
    }
    return [];
  }, [selectedStartDate, selectedEndDate, selectedNumGuests, bookings, cabins]);

  useEffect(() => {
    if (getValues().cabinId) {
      let [_, price] = getValues().cabinId.split('-');
      price = Number(price) * differenceInDays(new Date(selectedEndDate), new Date(selectedStartDate));
      setCabinPrice(price);
      setValue("totalPrice", price);
    }
  }, [getValues, setValue, setCabinPrice, selectedStartDate, selectedEndDate,watch('cabinId')])


  return (
    <Form onSubmit={handleSubmit(onsubmit)}
      type={closeModal ? "modal" : "regular"} >
      {/* Guest Information */}

      < FormRow label="Guest" error={errors?.guest?.message} >
        <SearchSelect
          id="guest"
          options={formatGuestData(guests)}
          disabled={isWorking}
          {...register('guest', {
            required: "This field is required"
          })}
        />
      </FormRow >

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
      {
        validCabins.length > 0 ?
          (
            <>

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
            </>
          )
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
    </Form >
  );
}

export default CreateBookingForm;
