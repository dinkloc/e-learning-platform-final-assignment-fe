import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../stores/index";
import { SidebarWithBurgerMenu } from "../SideBar";

const AdminLayout = () => {
  const { isLoggedIn, user, token } = useAppSelector((state) => state.auth);
  console.log(user, token, isLoggedIn);

  return user?.role === "ADMIN" ? (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-2">
        <SidebarWithBurgerMenu />
      </div>
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  ) : (
    <h1>You dont have premision</h1>
  );
};

export default AdminLayout;
