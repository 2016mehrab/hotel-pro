import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingService } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingService(bookingId),
    //retry: 1,
    onSuccess: () => {
      toast.success("Booking successfully deleted!");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],

      });
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("An error occurred while deleting the booking.");
    },
  });
  return {
    isDeleting,
    deleteBooking,
  };
}
