import { useForm } from "react-hook-form";

export type UserLogin = {
  email: string;
  password: string;
};

export const useLoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLogin>({
    mode: "onChange",
  });
  return { register, errors, handleSubmit };
};
