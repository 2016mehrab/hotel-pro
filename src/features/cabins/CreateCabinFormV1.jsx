/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { insertCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: insertCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  function onsubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  const { formState, register, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;

  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.capacity?.message}>
        <Input
          type="number"
          id="capacity"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>

      <FormRow>
        <FileInput
          {...register("image", {
            required: "This field is required",
          })}
          disabled={isCreating}
          id="image"
          accept="image/*"
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isCreating} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
