import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useInsertCabin(){

  const queryClient = useQueryClient();
  const { mutate, isLoading} = useMutation({
    mutationFn: insertCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {mutate, isLoading};
}