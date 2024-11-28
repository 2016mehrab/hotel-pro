import GuestTable from "../features/guests/GuestTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Guests() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
        <div>Various table operation</div>
      </Row>
      <GuestTable />
    </>
  );
}

export default Guests;
