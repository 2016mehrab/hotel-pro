import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertGuest } from "../../services/apiGuests";

export default function useInsertGuest() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: insertGuest,
    onSuccess: () => {
      toast.success("New guest successfully registered!");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isLoading };
}
