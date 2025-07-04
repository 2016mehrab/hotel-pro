import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => updateBooking(bookingId, {
      status: 'checked-in',
      isPaid: true,
      ...breakfast
    }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`);
      //queryClient.invalidateQueries({ active: true });
      queryClient.invalidateQueries((queries) => {
        return queries.queryKey.includes('bookings');

      });
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { checkin, isLoading };
}
