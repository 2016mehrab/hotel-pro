/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./createCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useInsertCabin from "./useInsertCabin";
import Modal from "../../ui/ReusableModal";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
const Crud = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isLoading: isDeleting, mutate } = useDeleteCabin();
  const { isLoading: isDuplicating, mutate: duplicate } = useInsertCabin();
  function handleDuplicate() {
    const { id, ...obj } = cabin;
    const c = { ...obj, name: `Copy of ${obj.name}` };
    return duplicate(c);
  }
  return (
    <Table.Row>
      <Img src={cabin.image} />
      <Cabin>{cabin.name}</Cabin>
      <div>Fits up to {cabin.capacity} guests</div>
      <Price>{formatCurrency(cabin.price)}</Price>
      <Discount>{formatCurrency(cabin.discount)}</Discount>
      <Crud>
        <Modal>
          <Modal.Open requestedWindow="edit">
            <Button size="small">
              <HiPencil />
            </Button>
          </Modal.Open>
          <Modal.Window window="edit" closeIcon={<Button>X</Button>}>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Button size="small" onClick={handleDuplicate}>
            <HiSquare2Stack />
          </Button>

          <Modal.Open requestedWindow="confirm-delete">
            <Button size="small">
              <HiTrash />
            </Button>
          </Modal.Open>
          <Modal.Window window="confirm-delete" closeIcon={<Button>X</Button>}>
            <ConfirmDelete
              resourceName="cabin"
              disabled={isDeleting}
              onConfirm={() => mutate(cabin.id)}
            />
          </Modal.Window>
        </Modal>
        <Menus.Menu>
          <Menus.Toggle id={cabin.id} />
          <Menus.List id={cabin.id}>
            <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>Duplicate</Menus.Button>
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </Crud>
    </Table.Row>
  );
};

export default CabinRow;
