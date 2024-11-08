/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin, updateCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useUpdateCabin(){
  const queryClient = useQueryClient();
  const { mutate, isLoading} = useMutation({
    // mutationFn: updateCabin,
    mutationFn:({cabinData,id}) =>{
      return insertCabin(cabinData,id);},
    onSuccess: () => {
      toast.success("cabin successfully updated!");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {mutate, isLoading};
}