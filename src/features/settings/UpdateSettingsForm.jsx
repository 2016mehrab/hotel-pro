/* eslint-disable no-unused-vars */
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";
import useUpdateSettings from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { isLoading, data } = useSettings();
  const { mutate, isLoading: isUpdating } = useUpdateSettings();
  function handleUpdate(e, field) {
    mutate({
      [field]: e.target.value,
    });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={data ? data.minNightsPerBooking : null}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e,"minNightsPerBooking")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={data ? data.maxNightsPerBooking : null}
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxNightsPerBooking")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={data ? data.maxGuestsPerBooking : null}
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e,"maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={data ? data.breakfastPrice : null}
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
