import { NavLink } from "react-router-dom";
import MenuUser from "../../components/MenuUser/index";
import NavListMenu from "./NavListMenu";
import {
  ListItem,
  Menu,
  MenuHandler,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CourseList from "./CourseList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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
            About Me
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
