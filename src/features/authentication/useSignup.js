import { useMutation } from "@tanstack/react-query";
import { signup as signupService } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
	const { mutate: signup, isLoading } = useMutation({
		mutationFn: ({ email, password, fullName }) => signupService({ email, password, fullName }),
		onSuccess: () => {
			toast.success('Account created successfully!')
			toast.success("Please verify the account from user's email address")
		}
	})

	return { signup, isLoading };
}
