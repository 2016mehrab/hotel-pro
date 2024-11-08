/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import useInsertCabin from "./useInsertCabin";

import { useForm } from "react-hook-form";
import useUpdateCabin from "./useUpdateCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { mutate, isLoading: isCreating } = useInsertCabin();
  const { mutate: updateCabin, isLoading: isEditing } = useUpdateCabin();
  const isWorking = isCreating || isEditing;
  function onsubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      updateCabin({ cabinData: { ...data, image }, id: editId });
    else {
      mutate(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    }
  }

  const { formState, register, handleSubmit, reset, getValues } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.capacity?.message}>
        <Input
          type="number"
          id="capacity"
          disabled={isWorking}
          {...register("capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
          defaultValue={0}
        />
      </FormRow>
      <FormRow label="Regular price" error={errors?.price?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("price", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().price ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          style={{ resize: "none" }}
          type="number"
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>

      <FormRow>
        <FileInput
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
          disabled={isWorking}
          id="image"
          accept="image/*"
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isWorking} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
