import { useEffect } from "react";
import { useAppSelector } from "../../stores/index";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="min-h-screen w-full bg-auth-gradient">
      <div className="grid h-screen w-full grid-cols-12 items-center gap-2 text-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
