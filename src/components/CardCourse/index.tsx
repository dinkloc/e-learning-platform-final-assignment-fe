import { CalendarIcon } from "@heroicons/react/16/solid";
import { Progress, Typography } from "@material-tailwind/react";

import Instance from "../../services/instance";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Circles } from "react-loader-spinner";

const CardCourse = () => {
  const fetch = async () => {
    try {
      const res = await Instance.get("/courses?limit=8&offset=0");
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["courses"],
    queryFn: fetch,
    staleTime: Infinity,
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center">
        <Circles
          height="160"
          width="160"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  if (isError) return <h1>Error....</h1>;

  return (
    <div className=" grid grid-cols-12 w-full ">
      <div className="col-span-8 col-start-3 grid grid-cols-12 gap-2">
        {data.record?.map((value: any, index: any) => (
          <div
            key={index + 1}
            className="col-span-3 border-2 border-gray-400 rounded-lg cursor-default"
          >
            <div className="flex justify-center pt-2">
              <img
                src={`${value.thumbnail}`}
                alt="Nodejs Course"
                width={"280px"}
                className="border rounded-lg"
              />
            </div>
            <div className="p-2">
              <NavLink to={`/course/${value.course_id}`}>
                {" "}
                <p className="text-xl font-bold hover:text-green-800">
                  {value.name}
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
              <Progress value={10} />
            </div>
            <div className="flex flex-row justify-between p-2">
              <div>0% completion</div>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <CalendarIcon className="size-6 text-blue-800" />
                </div>
                <p className="font-medium text-base">
                  {value.total_time_course &&
                    Math.round(value.total_time_course / 60 / 3)}{" "}
                  Weed
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCourse;
