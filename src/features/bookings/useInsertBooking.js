import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBooking } from "../../services/apiBookings";

export default function useInsertBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isInserting, mutate: insertBooking } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Cabin booking successfull!");
      queryClient.invalidateQueries(queries => {
        return queries.queryKey.includes('booking');
      });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    isInserting,
    insertBooking,
  };
}
