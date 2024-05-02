import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../stores/index";

const AdminLayout = () => {
  const { isLoggedIn, user, token } = useAppSelector((state) => state.auth);
  console.log(user, token, isLoggedIn);

  return user?.role === "ADMIN" ? <Outlet /> : <h1>You dont have premision</h1>;
};

export default AdminLayout;
