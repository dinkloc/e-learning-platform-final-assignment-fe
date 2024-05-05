import { useAppSelector } from "../../stores/index";
import AvatarPageComponent from "../Avatar";
import CardCourse from "../CardCourse";

const ProfileUserPageComponent = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-12 grid grid-cols-12 w-full bg-black ">
        <div className="col-span-6 col-start-3 text-white font-bold text-5xl py-8">
          {user?.userName}
        </div>
      </div>
      <div className="col-span-12 grid grid-cols-12 w-full">
        <div className="col-span-6 col-start-3 mt-3">
          <AvatarPageComponent />
        </div>
      </div>
      <div className="col-span-12 grid grid-cols-12 mt-3">
        <div className="col-span-6 col-start-3 mt-3">Chart</div>
      </div>
      <div className="col-span-12 flex flex-col">
        <div className="flex flex-row justify-center items-center">
          Learning
        </div>
        <CardCourse />
      </div>
    </div>
  );
};

export default ProfileUserPageComponent;
