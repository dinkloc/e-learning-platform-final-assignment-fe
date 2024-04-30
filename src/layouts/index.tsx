import { useEffect } from "react";
import { useAppSelector } from "../stores/index";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};

export default MainLayout;
