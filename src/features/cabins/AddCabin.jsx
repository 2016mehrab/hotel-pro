import Button from "../../ui/Button";
import Modal from "../../ui/ReusableModal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./createCabinForm";

function AddCabin() {

  return (
    <Modal>
      <Modal.Open requestedWindow="cabin-form">
        <Button>Create Cabin</Button>
      </Modal.Open>
      <Modal.Window window="cabin-form" closeIcon={
        <Button>x</Button>
      }>
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open requestedWindow="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window window="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
    // <Modal>
    //   <Modal.Open opens="cabin-form">
    //     <Button>Create new Cabin</Button>
    //   </Modal.Open>
    //   <Modal.Window name="cabin-form">
    //     <CreateCabinForm />
    //   </Modal.Window>

    //   <Modal.Open opens="table">
    //     <Button>Show Table</Button>
    //   </Modal.Open>
    //   <Modal.Window name="table">
    //     <CabinTable />
    //   </Modal.Window>
    // </Modal>
  );

}


export default AddCabin;
