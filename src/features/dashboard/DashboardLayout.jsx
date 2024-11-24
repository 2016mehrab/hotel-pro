import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
const DashboardLayout = () => {
  const { bookings, isLoading } = useRecentBookings();
  const { confirmedStays, isLoading: loadingStays, numDays } = useRecentStays();
  const { data: cabins, isLoading: loadingCabins } = useCabins();
  if (isLoading || loadingStays || loadingCabins) return (
    <Spinner />
  )
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} numDays={numDays} cabinCount={cabins.length} confirmedStays={confirmedStays} />
      <div>Today&apos;s Acitivity</div>
      <div>Chart stay duration </div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
