import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../../libs/yub/login.schema";
import { LoginRequest } from "@/types/auth";
import { useAppDispatch } from "../../../stores/index";
import { login } from "../../../stores/slices/auth/index";

const LoginPageComponent = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data: LoginRequest) => {
    console.log(data);
    const res = await dispatch(login(data)).unwrap();
    console.log(res);
    reset({
      email: "",
      password: "",
    });
  };
  return (
    <div className="col-span-4 col-start-5 bg-gray-500 rounded-md">
      <div className="flex justify-start px-5 pt-3">
        <h1 className="font-medium text-4xl">Login Page</h1>
      </div>
      <div className=" rounded-sm px-5 py-5">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start">
              <label htmlFor="email">Email</label>
            </div>
            <input
              {...register("email")}
              className={`h-[40px] focus-visible:outline-none border border-gray-800 hover:border hover:border-blue-800 rounded-lg focus:none ps-3 ${
                errors.email ? "border-red-500 " : ""
              } `}
              type="email"
              placeholder="Email"
              required
            />
            {errors.email && (
              <div className="flex justify-start">
                <p className="text-red-700">{errors.email.message}</p>
              </div>
            )}
            <div className="flex justify-start">
              <label htmlFor="password">Password</label>
            </div>
            <input
              {...register("password")}
              className={`h-[40px] rounded-lg ps-3 focus-visible:outline-none hover:(border border-blue-800) border border-gray-800  hover:border-blue-800 ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
              placeholder="Password"
              required
            />
            {errors.password && (
              <div className="flex justify-start">
                <p className="text-red-800">{errors.password.message}</p>
              </div>
            )}
            <div className="mt-4">
              <button className="bg-blue-700 rounded-md w-2/3 py-2 text-xl text-white hover:bg-blue-900">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPageComponent;
