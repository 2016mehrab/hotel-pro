import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export default function useCabins() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  return { isLoading, data, error };
}
