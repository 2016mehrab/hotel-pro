/* eslint-disable react/prop-types */
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {

  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const checkins = confirmedStays.length;
  const occupancyRate = Math.round(confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) / (numDays * cabinCount) * 100);


  return (
    <>
      <Stat title="Bookings" color='blue' icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title="Sales" color='green' icon={<HiOutlineBanknotes />} value={formatCurrency(sales, { currency: 'BDT' })} />
      <Stat title="Check ins" color='indigo' icon={<HiOutlineCalendarDays />} value={checkins} />
      <Stat title="Occupancy rate" color='yellow' icon={<HiOutlineChartBar />} value={occupancyRate + "%"} />
    </>
  )
}

export default Stats
