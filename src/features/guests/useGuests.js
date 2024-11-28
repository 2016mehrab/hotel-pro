import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";

export default function useGuests() {

	const { isLoading, data, error } = useQuery({
		queryKey: ["guests"],
		queryFn: getGuests
	});

	return { isLoading, data, error };
}
