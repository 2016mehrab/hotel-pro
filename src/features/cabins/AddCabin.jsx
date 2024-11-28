import Button from "../../ui/Button";
import Modal from "../../ui/ReusableModal";
import CreateCabinForm from "./createCabinForm";

function AddCabin() {

  return (
    <Modal>
      <Modal.Open requestedWindow="cabin-form">
        <Button>Create Cabin</Button>
      </Modal.Open>
      <Modal.Window windowName="cabin-form" closeIcon={
        <Button>x</Button>
      }>
        <CreateCabinForm />
      </Modal.Window>

    </Modal>

  );

}


export default AddCabin;
