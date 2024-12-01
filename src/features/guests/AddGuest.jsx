import Button from "../../ui/Button";
import Modal from "../../ui/ReusableModal";
import Spinner from "../../ui/Spinner";
import CreateGuestForm from "./createGuestForm";
import useGuests from "./useGuests";

function AddGuest() {

  const { data, isLoading } = useGuests();
  if (isLoading) {

    return <Spinner />

  }

  return (
    <Modal>
      <Modal.Open requestedWindow="guest-form">
        <Button>Register Guest</Button>
      </Modal.Open>
      <Modal.Window windowName="guest-form" closeIcon={
        <Button>x</Button>
      }>
        <CreateGuestForm guests={data.data} />
      </Modal.Window>
    </Modal>

  );

}


export default AddGuest;
