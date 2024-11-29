import { useQuery } from "@tanstack/react-query";
import { getGuestsByPattern } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";

export default function useSearchGuests() {
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search') || '';

	const { isLoading, data, error } = useQuery({
		queryKey: ["guests", search],
		queryFn: () => getGuestsByPattern({ search })
	});
	return { isLoading, data, error };
}
