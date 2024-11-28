import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export default function useGuests() {
	const [searchParams] = useSearchParams();
	const queryClient = useQueryClient();
	const sortByRaw = searchParams.get('sortBy') || 'created_at-desc';
	const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
	const [field, order] = sortByRaw.split('-');
	const sortBy = { field, order };

	const { isLoading, data, error } = useQuery({
		queryKey: ["guests", sortBy, page],
		queryFn: () => getGuests({ sortBy, page })
	});

	const count = data?.count || 0;
	const totalPages = Math.ceil(count / PAGE_SIZE);
	if (page < totalPages) {
		queryClient.prefetchQuery({
			queryKey: ['guests', sortBy, page + 1],
			queryFn: () => getGuests({ sortBy, page: page + 1 })
		})
	}
	if (page > 1) {
		queryClient.prefetchQuery({
			queryKey: ['guests', sortBy, page - 1],
			queryFn: () => getGuests({ sortBy, page: page - 1 })
		})
	}

	return { isLoading, data, error };
}
