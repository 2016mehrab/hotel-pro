/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";

const Guests = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function GuestRow(
  { guest: {
    email,
    created_at: registered,
    fullName,
    nationalID,
    nationality


  } = {} }
) {
  console.log('GuestRow rendered');
  return (
    <Table.Row>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{nationalID}</div>
      <div>{nationality}</div>
      <Stacked>
        <span>
          {isToday(new Date(registered))
            ? "Today"
            : formatDistanceFromNow(registered)}{" "}
        </span>
        <span>
          {format(new Date(registered), "MMM dd yyyy")}
        </span>
      </Stacked>
    </Table.Row>
  );
}

export default GuestRow;
