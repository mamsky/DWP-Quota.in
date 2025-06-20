import { useStore } from "@/store/stores";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user } = useStore();
  if (user.name != "" && user.email != "") return <Navigate to={"/"} />;
  return <Outlet />;
};

export default AuthLayout;
