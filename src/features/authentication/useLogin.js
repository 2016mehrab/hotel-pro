import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginService } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const useLogin = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: login, isLoading, error } = useMutation({
		mutationFn: ({ email, password }) => loginService({
			email, password
		}),
		onSuccess: (user) => {
			queryClient.setQueryData(['user'], user)
			navigate("/dashboard", { replace: true });
		},

		onError: (err) => {
			console.log('ERROR', err)
			toast.error(err.message)
		}

	})
	return { login, isLoading, error };
};
