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
import LearnLecturePageComponent from "../components/LearnLecture/index";
import ProfilePage from "../pages/Profile/index";
import EnrollmentAdmin from "../components/Admin/EnrollmentAdmin";
import UserPageAdmin from "../components/Admin/UserAdmin";
import CoursePageComponent from "../components/Courses/index";
import CodePlaygroundPageComponent from "../components/CodePlayground/index";
import ProblemPageComponent from "../components/Problem/index";
import QuizPageComponent from "../components/Quiz/index";

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
          path: "/course",
          element: <CoursePageComponent />,
        },
        {
          path: "/problem",
          element: <ProblemPageComponent />,
        },
        {
          path: "/code-playground",
          element: <CodePlaygroundPageComponent />,
        },
        {
          path: "/user/:name",
          element: <ProfilePage />,
        },
        {
          path: "/user/edit/:id",
        },
        {
          path: "/course/:id",
          element: <DetailCoursePageComponent />,
        },
        {
          path: "/course/:id/learn/lecture/:id",
          element: <LearnLecturePageComponent />,
        },
        {
          path: "/course/:id/learn/lecture/:id/quiz",
          element: <QuizPageComponent />,
        },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/enrollment",
          element: <EnrollmentAdmin />,
        },
        {
          path: "/admin/user",
          element: <UserPageAdmin />,
        },
        {
          path: "/admin/course",
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
