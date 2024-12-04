/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import useCheckout from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isLoading } = useCheckout()
  return (
    <Button onClick={() => checkout(bookingId)} disabled={isLoading} variation="primary" size="small">
      Check out
    </Button>
  );
}

export default CheckoutButton;
