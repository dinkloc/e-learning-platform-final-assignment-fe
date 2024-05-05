import { CalendarIcon } from "@heroicons/react/16/solid";
import { Progress, Typography } from "@material-tailwind/react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const CardCourse = () => {
  // const dispatch = useAppDispatch()

  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/courses");
      const { data } = res;
      console.log(data.data.course);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-2 grid grid-cols-12 w-full ">
      <div className="col-span-8 col-start-3 grid grid-cols-12 gap-2">
        <div className="col-span-3 border-2 border-gray-400 rounded-lg cursor-default">
          <div className="flex justify-center pt-2">
            <img
              src="/thumbnail-course/nodejsthumbnail.jpg"
              alt="Nodejs Course"
              width={"280px"}
              className="border rounded-lg"
            />
          </div>
          <div className="p-2">
            <NavLink to={"/course/123"}>
              {" "}
              <p className="text-xl font-bold hover:text-green-800">
                Trai Code 100: Introduction to Python Programming
              </p>
            </NavLink>

            <h6 className="text-sm">Great for absolute beginners</h6>
          </div>
          <div className="w-full p-2">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                Completed
              </Typography>
              <Typography color="blue-gray" variant="h6">
                50%
              </Typography>
            </div>
            <Progress value={50} />
          </div>
          <div className="flex flex-row justify-between p-2">
            <div>0% completion</div>
            <div className="flex gap-2 justify-center items-center">
              <div>
                <CalendarIcon className="size-6 text-blue-800" />
              </div>
              <p>Weed</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 border-2 border-gray-400 rounded-lg">
          <div className="flex justify-center pt-2">
            <img
              src="/thumbnail-detail-course/cs-50-thumbnail.jpg"
              alt="Nodejs Course"
              width={"280px"}
              className="border"
            />
          </div>
          <div className="p-2">
            <NavLink to={"/course/123"}>
              {" "}
              <p className="text-xl font-bold hover:text-green-800">
                Trai Code 100: Introduction to Python Programming
              </p>
            </NavLink>

            <p className="text-sm">Great for absolute beginners</p>
          </div>
          <div className="w-full p-2">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                Completed
              </Typography>
              <Typography color="blue-gray" variant="h6">
                50%
              </Typography>
            </div>
            <Progress value={50} />
          </div>
          <div className="flex flex-row justify-between p-2">
            <div>0% completion</div>
            <div className="flex gap-2 justify-center items-center">
              <div>
                <CalendarIcon className="size-6 text-blue-800" />
              </div>
              <p>Weed</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 border-2 border-gray-400 rounded-lg">
          <div className="flex justify-center pt-2">
            <img
              src="/thumbnail-detail-course/cs-50-thumbnail.jpg"
              alt="Nodejs Course"
              width={"280px"}
              className="border"
            />
          </div>
          <div className="p-2">
            <NavLink to={"/course/123"}>
              {" "}
              <p className="text-xl font-bold hover:text-green-800">
                Trai Code 100: Introduction to Python Programming
              </p>
            </NavLink>

            <p className="text-sm">Great for absolute beginners</p>
          </div>
          <div className="w-full p-2">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                Completed
              </Typography>
              <Typography color="blue-gray" variant="h6">
                50%
              </Typography>
            </div>
            <Progress value={50} />
          </div>
          <div className="flex flex-row justify-between p-2">
            <div>0% completion</div>
            <div className="flex gap-2 justify-center items-center">
              <div>
                <CalendarIcon className="size-6 text-blue-800" />
              </div>
              <p>Weed</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={fetch}>fetch</button>
    </div>
  );
};

export default CardCourse;
