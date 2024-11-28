import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";

export default function useAllBookings() {

  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings
  });

  return { isLoading, data, error };
}
