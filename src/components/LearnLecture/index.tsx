import React from "react";
import {
  BackwardIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  ForwardIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Progress,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import Header from "../../layouts/Header/index";
import Instance from "../../services/instance";
import VideoLessonComponent from "../VideoLesson";
import { FidgetSpinner } from "react-loader-spinner";
import DiscussionPerLesson from "../Discussion";

type IconProps = {
  id: number;
  open: number;
};

const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const LearnLecturePageComponent = () => {
  const [open, setOpen] = React.useState<number>(0);
  const [sectionId, setSectionId] = React.useState<number>(1);
  const [lessonId, setLessonId] = React.useState<number>(1);

  const [srcVideo, setSrcVideo] = React.useState<string>(
    "https://cs-50x.s3.amazonaws.com/lec-0-introduction.mp4"
  );

  const fetchDataSectionById = async () => {
    try {
      const res = await Instance.get(`section`);
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["section"],
    queryFn: fetchDataSectionById,
    staleTime: Infinity,
  });

  const fetchDataLessonById = async (id: number) => {
    try {
      const res = await Instance.get(`lesson/${id}`);
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const {
    isLoading: isPendingLesson,
    isError: isErrorLesson,
    data: dataLesson,
  } = useQuery({
    queryKey: ["lesson", sectionId],
    queryFn: () => fetchDataLessonById(sectionId),
  });

  const handleOpen = (value: number) => {
    setSectionId(value);
    setOpen(open === value ? 0 : value);
  };

  if (isPending) {
    return (
      <div className="h-screen flex w-full justify-center items-center">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
      </div>
    );
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isErrorLesson) {
    return <h1>Error</h1>;
  }

  if (isPendingLesson) {
    return (
      <div className="h-screen flex w-full justify-center items-center">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-12 w-full mt-4">
        <div className="col-span-12 flex justify-center">
          <p className="text-2xl font-medium">
            Microservices with Node JS and React
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full mt-4 absolute">
        <div className="grid grid-cols-12 col-span-10 col-start-2 gap-2">
          <div className="col-span-4 p-4">
            <div className="">
              {/* <div className="mb-8">
                <Progress />
              </div> */}
              {data.map((value: any, index: number) => (
                <Accordion
                  key={index + 1}
                  open={open === value.section_id}
                  icon={<Icon id={value.section_id} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen(value.section_id)}>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-xl">{value.section_name}</p>
                      <p className="text-sm font-thin ">10 / 10 | 50 min</p>
                    </div>
                  </AccordionHeader>
                  {dataLesson.map((value: any, index: any) => (
                    <div key={index + 1}>
                      <AccordionBody>
                        <div className="">
                          <button
                            onClick={() => {
                              setSrcVideo(value.source_video_lesson);
                              setLessonId(value.lesson_id);
                            }}
                          >
                            <p className="font-medium text-lg">
                              {index}. {value.lesson_name}
                            </p>
                          </button>
                          <div className="flex flex-row gap-2">
                            <div className="flex justify-center items-center">
                              <PlayCircleIcon className="size-4" />
                            </div>
                            <div className="flex justify-center items-center pt-[2px]">
                              <p>{value.minutes_per_lesson} min</p>
                            </div>
                          </div>
                        </div>
                      </AccordionBody>
                    </div>
                  ))}
                </Accordion>
              ))}
            </div>
          </div>
          <div className="col-span-8">
            <div className="p-4 ">
              <VideoLessonComponent src={srcVideo} />
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
                      <BackwardIcon className="size-5" />
                      Previous
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
            <div className="p-4">
              <DiscussionPerLesson id={lessonId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnLecturePageComponent;
