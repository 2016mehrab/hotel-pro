import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logout as logoutService } from "../../services/apiAuth";


const useLogout = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: logout, isLoading, error } = useMutation({
		mutationFn: logoutService,
		onSuccess: () => {
			queryClient.removeQueries()
			navigate("/login");
		},
		onError: (err) => {
			console.log('ERROR', err)
			queryClient.removeQueries()
			toast.error('something unexpected happened. Please reload the page.')
		}

	})
	return { logout, isLoading, error };
};
export default useLogout;
