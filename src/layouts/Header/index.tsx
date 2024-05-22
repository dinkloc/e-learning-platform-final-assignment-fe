import { NavLink, useNavigate } from "react-router-dom";
import MenuUser from "../../components/MenuUser/index";
import NavListMenu from "./NavListMenu";
import CourseList from "./CourseList";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="grid w-full grid-cols-12 text-center py-6 border-b-2 border-gray-200 sticky top-0 bg-gray-50">
      <NavLink to={"/"} className="col-span-3 flex justify-center">
        <img src="/official_logo.jpg" className="h-[40px]" alt="" />
      </NavLink>
      <div className="col-span-6 grid grid-cols-12">
        <div className="col-span-6 col-start-4 grid grid-cols-12 justify-center items-center">
          <div className="col-span-4 flex justify-center">
            <CourseList />
          </div>
          <div className="col-span-4 flex justify-center ">
            <NavListMenu />
          </div>
          <div className="col-span-4 flex justify-center font-medium text-gray-900 ">
            <button
              onClick={() => {
                navigate("/code-playground");
              }}
              className="hover:bg-gray-200 py-[8px] px-[12px] rounded-lg"
            >
              Code Playground
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="py-2">
          <MenuUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
