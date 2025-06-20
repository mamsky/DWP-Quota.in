import axios from "axios";
import { useLoginForm, type UserLogin } from "./hook/useLoginForm";
import { useStore } from "@/store/stores";
import { useNavigate } from "react-router-dom";

const LoginFeatures = () => {
  const { errors, handleSubmit, register } = useLoginForm();
  const { setUser } = useStore();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const onSubmit = async (data: UserLogin) => {
    try {
      const res = await axios.get(`${baseUrl}/user`, {
        params: {
          email: data.email,
          password: data.password,
        },
      });

      if (res.data.length > 0) {
        const user = res.data[0];
        setUser(user);
        alert(`Login berhasil! Selamat datang, ${user.name}`);
        navigate("/");
      } else {
        alert("Email atau password salah!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Login <span className="text-blue-600">Quota.in</span>
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email wajib diisi" })}
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password wajib diisi",
                minLength: { value: 6, message: "Minimal 6 karakter" },
              })}
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFeatures;
