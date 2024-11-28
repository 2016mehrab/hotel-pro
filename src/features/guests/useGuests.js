import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";

export default function useGuests() {
	const [searchParams] = useSearchParams();
	const sortByRaw = searchParams.get('sortBy') || 'created_at-desc';
	const [field, order] = sortByRaw.split('-');
	const sortBy = { field, order };

	const { isLoading, data, error } = useQuery({
		queryKey: ["guests", sortBy],
		queryFn: () => getGuests({ sortBy })
	});

	return { isLoading, data, error };
}
