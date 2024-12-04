import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";

export default function useAllGuests() {
	const { isLoading, data, error } = useQuery({
		queryKey: ["guests", 'all'],
		queryFn: getGuests
	});


	return { isLoading, data, error };
}
