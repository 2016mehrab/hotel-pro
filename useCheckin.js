import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "./src/services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading } = useMutation({
    mutationFn: (bookingId) => updateBooking(bookingId, {
      status: 'checked-in',
      isPaid: true
    }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in!`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { checkin, isLoading };
}
