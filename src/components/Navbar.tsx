import { useStore } from "@/store/stores";
import ButtonLogout from "./ButtonLogout";
import RightBar from "./RightBar";

const Navbar = () => {
  const { user } = useStore();
  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-md bg-gradient-to-r from-violet-500 via-violet-300 to-white ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="font-bold text-xl font-mono">{user.name}</h1>
        <div className="flex items-center gap-4">
          <RightBar />
          <ButtonLogout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
