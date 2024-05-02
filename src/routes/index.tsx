import { useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/index";
import Register from "../pages/Auth/Register";
import MainLayout from "../layouts/index";
import HomePage from "../pages/Home/index";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Dashboard from "../pages/Dashboard/index";
import NotFoundPageComponent from "../components/NotFoundPage/index";
import DetailCoursePageComponent from "../components/DetailCourse/index";

const RouterList = () => {
  return useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/course/:id",
          element: <DetailCoursePageComponent />,
        },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPageComponent />,
    },
  ]);
};

export default RouterList;
