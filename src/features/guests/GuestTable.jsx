/* eslint-disable no-unused-vars */
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import useGuests from "./useGuests";
import GuestRow from "./GuestRow";

function GuestTable() {
  const { isLoading, data: guests } = useGuests();
  if (isLoading) return <Spinner />;

  if (guests?.length === 0) {
    return <Empty resource="guests" />;
  }

  return (
    <Menus>
      <Table columns="1.5fr 2fr 1fr 1.4fr 1fr 0.1fr">
        <Table.Header>
          <div>NAME</div>
          <div>EMAIL</div>
          <div>NID</div>
          <div>NATIONALITY</div>
          <div>REGISTERED</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => (
            <GuestRow key={guest.id} guest={guest} />
          )}
        />

        <Table.Footer>
          <p>Pagination here</p>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestTable;
