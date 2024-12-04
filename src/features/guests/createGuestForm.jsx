/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useInsertGuest from "./useInsertGuest";
import Form from "../../ui/Form";
import Select from "../../ui/Select";
import countries from "./data-countries";

function formatData(countries) {
  return countries.map(country => {
    return {
      label: country.name, value: JSON.stringify(
        {
          nationality: country.name,
          countryFlag: country.flagcdn
        }
      )
    };
  })
}
function CreateGuestForm({ guestToEdit = {}, closeModal }) {
  const { id: editId, ...editValues } = guestToEdit;
  const isEditSession = Boolean(editId);
  const { mutate: createGuest, isLoading: isCreating } = useInsertGuest();
  const isWorking = isCreating;

  function onsubmit(data) {
    const { nationality, countryFlag } = JSON.parse(data.country);
    delete data.country
    createGuest({
      ...data,
      nationality: nationality,
      countryFlag: countryFlag,
    })
    reset();
  }

  const { formState, register, handleSubmit, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  return (
    <Form onSubmit={handleSubmit(onsubmit)}
      type={closeModal ? 'modal' : 'regular'}>
      <FormRow label="Full Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isWorking}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.capacity?.message}>
        <Input
          type="email"
          id="email"
          disabled={isWorking}
          {
          ...register("email", {
            required: "This field is required",
          })
          }
        />
      </FormRow>

      <FormRow label="National ID" error={errors?.price?.message}>
        <Input
          type="text"
          id="nationalID"
          disabled={isWorking}
          {...register("nationalID", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.cabinId?.message}>
        <Select
          id="country"
          options={formatData(countries)}
          disabled={isWorking}

          {...register("country", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          onClick={() => closeModal?.()}
          disabled={isWorking}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit" : "Register Guest"} </Button>
      </FormRow >
    </Form >
  );
}

export default CreateGuestForm;
