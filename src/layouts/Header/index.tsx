import MenuUser from "../../components/MenuUser/index";
import NavListMenu from "./NavListMenu";

const Header = () => {
  return (
    <div className="grid w-full grid-cols-12 text-center pt-6 pb-8 border-b-2 border-gray-200 sticky top-0 bg-gray-50">
      <div className="col-span-3">Logo</div>
      <div className="col-span-6 grid grid-cols-12">
        <div className="col-span-4 flex justify-center">
          <div className="">
            <NavListMenu />
          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <div className="">
            <NavListMenu />
          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <div className="hover:bg-gray-400 w-2/3 py-2 rounded-lg">
            Code Playground
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
