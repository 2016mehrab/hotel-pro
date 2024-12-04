/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import Modal from "../../ui/ReusableModal";
import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins";
import useAllGuests from "../guests/useAllGuests";
import useSettings from "../settings/useSettings";
import CreateBookingForm from "./createBookingForm";
import useAllBookings from "./useAllBookings";

function AddBooking() {

  const { data: cabins, isLoading: cabinsLoading } = useCabins();
  const { data: guests, isLoading: guestsLoading } = useAllGuests();
  const { data: bookings, isLoading: loadingBookings } = useAllBookings();
  const { data: settings, isLoading: settingsLoading } = useSettings();
  if (cabinsLoading || settingsLoading || loadingBookings || guestsLoading) return <Spinner />;

  return (
    <Modal>
      <Modal.Open requestedWindow="booking-form">
        <Button>Create Booking</Button>
      </Modal.Open>
      <Modal.Window windowName="booking-form" closeIcon={
        <Button>x</Button>
      }>
        <CreateBookingForm bookings={bookings} settings={settings} guests={guests.data} cabins={cabins} />
      </Modal.Window>
    </Modal>

  );

}


export default AddBooking;
