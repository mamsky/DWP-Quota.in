import Navbar from "@/components/Navbar";
import { useStore } from "@/store/stores";
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { user } = useStore();
  if (user.email == "" && user.name == "") return <Navigate to={"/login"} />;
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
