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
			console.log("from useLogin", user)
			navigate("/dashboard");

		},

		onError: (err) => {
			console.log('ERROR', err)
			toast.error('Provided email or password are incorrect.')
		}

	})
	return { login, isLoading, error };
};
