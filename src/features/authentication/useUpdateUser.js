/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export default function useUpdateUser() {
	const queryClient = useQueryClient();
	const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		// mutationFn: updateCabin,
		mutationFn: updateCurrentUser,
		onSuccess: () => {
			toast.success("user account successfully updated!");
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},

		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { updateUser, isUpdating };
}
