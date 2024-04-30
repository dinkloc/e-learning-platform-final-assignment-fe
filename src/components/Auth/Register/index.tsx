import { useForm } from "react-hook-form";

const RegisterPageComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (data: any) => {
    console.log(data);
    reset({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="col-span-4 bg-gray-300 col-start-5">
      <div className=" px-10 pt-10 flex justify-start">
        <h1 className="text-xl font-bold">Register Page</h1>
      </div>
      <div className="p-10">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex justify-between  mb-8">
            <div className="flex flex-col gap-2">
              <input
                {...register("firstname")}
                className="py-2 px-2 focus-visible:outline-none border rounded-lg  border-gray-500 hover:border hover:border-blue-800"
                type="firstname"
                placeholder="First Name"
              />
              <label className="justify-start flex" htmlFor="firstname">
                First Name
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <input
                {...register("lastname")}
                className=" py-2 px-2 focus-visible:outline-none border rounded-lg  border-gray-500 hover:border hover:border-blue-800"
                type="lastname"
                placeholder="Last Name"
              />
              <label htmlFor="lastname" className="flex j   ustify-start">
                Last Name
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-[20px]">
            <label className="flex justify-start" htmlFor="username">
              User Name
            </label>
            <input
              {...register("username")}
              type="username"
              className="rounded-lg py-2 px-2 border border-gray-500 hover:border hover:border-blue-800"
              placeholder="User Name"
            />
          </div>
          <div className="flex flex-col gap-1 mb-[20px]">
            <label htmlFor="email" className="flex justify-start">
              Email
            </label>
            <input
              {...register("email")}
              className="focus-visible:outline-none border rounded-lg py-2 px-2  border-gray-500 hover:border hover:border-blue-800"
              type="email"
              placeholder="Gmail"
            />
          </div>
          <div className="flex flex-col mb-[20px] gap-1">
            <label htmlFor="password" className="flex justify-start">
              Password
            </label>
            <input
              {...register("password")}
              className="focus-visible:outline-none border rounded-lg py-2 px-2  border-gray-500 hover:border hover:border-blue-800"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="bg-green-800 hover:bg-green-900 text-white rounded-lg py-2 w-3/5 text-xl">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPageComponent;
