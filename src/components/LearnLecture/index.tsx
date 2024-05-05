import {
  BackwardIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";
import Header from "../../layouts/Header/index";
import NavListComponent from "../NavListCourse";

const LearnLecturePageComponent = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 w-full mt-4">
        <div className="grid grid-cols-12 col-span-10 col-start-2 gap-2">
          <div className="col-span-4 p-4 border">
            <div className="">
              <NavListComponent />
            </div>
          </div>
          <div className="col-span-8">
            <div className="p-4 border border-gray-200">
              <div>
                <video className="rounded-lg" width={"100%"} controls>
                  <source src="/video/this_is_cs50.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-row justify-between mt-3 ">
                <div className="flex flex-row gap-3">
                  <div className="">
                    <button className="bg-green-800 px-4 py-3 text-sx font-base rounded-lg hover:bg-green-900 text-white flex flex-row justify-center items-center gap-2 ">
                      Mask It Complete
                      <CheckCircleIcon className="size-5" />
                    </button>
                  </div>
                  <div>
                    <button className="bg-red-700 px-4 py-3 text-sx font-base rounded-lg text-white hover:bg-red-900 flex flex-row gap-2 justify-center items-center ">
                      Source Code
                      <CodeBracketIcon className="size-5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <div>
                    <button className="bg-gray-600 px-4 py-3 text-sx font-base rounded-lg text-white hover:bg-gray-800 flex flex-row gap-2 justify-center items-center">
                      Previous
                      <BackwardIcon className="size-5" />
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 px-4 py-3 text-sx font-base rounded-lg text-white hover:bg-gray-800 flex flex-row gap-2 justify-start items-center">
                      Next
                      <ForwardIcon className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <h1 className="font-bold text-4xl">Description</h1>
                </div>
                <div>
                  <p>Updating........</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnLecturePageComponent;
