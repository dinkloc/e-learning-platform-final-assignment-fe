import { ChangeEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import Header from "../../layouts/Header/index";
import NavListComponent from "../NavListCourse";
import Instance from "../../services/instance";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../stores/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const DetailCoursePageComponent = () => {
  const { user } = useAppSelector((state) => state.auth);
  const queryClient = useQueryClient();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setFile(undefined);
    setOpen(!open);
  };

  const location = useLocation();
  const courseId = location.pathname.slice(8);

  const fetchCourseById = async (id: number) => {
    try {
      const res = await Instance.get(`/courses/${id}`);
      const { data } = res;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const {
    isPending: isPendingCourse,
    isError: isErrorCourse,
    data: dataCourseById,
  } = useQuery({
    queryKey: ["courses", Number(courseId)],
    queryFn: () => fetchCourseById(Number(courseId)),
    staleTime: Infinity,
  });

  const fetchEnrollmentByUserAndCourse = async (
    userId: number,
    courseId: number
  ) => {
    try {
      const res = await Instance.get(
        `/enrollment/user-course?user_id=${userId}&course_id=${courseId}`
      );
      const { data } = res;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const {
    isPending,
    isError,
    data: dataFetchingEnrollment,
  } = useQuery({
    queryKey: ["enrollment", user?.id, Number(courseId)],
    queryFn: () => fetchEnrollmentByUserAndCourse(user?.id, Number(courseId)),
    staleTime: Infinity,
  });

  console.log(dataCourseById);

  const data = new FormData();
  if (file) {
    data.append("file", file);
    data.append("userId", `${user?.id}`);
    data.append("courseId", `${courseId}`);
  }

  const mutation = useMutation({
    mutationFn: (data) => {
      return Instance.post("/enrollment", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries("courses", Number(courseId));
    },
  });

  if (isPendingCourse) {
    return <h1>Loading</h1>;
  }

  if (isErrorCourse) {
    return <h1>Error Course</h1>;
  }

  if (mutation.error) {
    console.log(mutation.error);
  }

  const handleSubmit = () => {
    mutation.mutate(data);
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          Upload your student card to enroll this course
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files) {
                    setFile(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
              <p>put your student card</p>
            </label>
            {file && (
              <div className=" mt-6 flex justify-center items-center">
                <img
                  src={`${URL.createObjectURL(file)}`}
                  alt=""
                  className="rounded-lg h-[70px]"
                />
              </div>
            )}
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            {mutation.isPending ? <h1>Loading</h1> : <span>Confirm</span>}
          </Button>
        </DialogFooter>
      </Dialog>
      <Header />
      <div className="grid grid-cols-12">
        <div className="bg-gray-900 h-[360px] grid w-full col-span-12">
          <div className="grid grid-cols-12 col-span-8 py-6">
            <div className="text-white col-span-8 col-start-3 p-4 flex flex-col gap-4">
              <dd className="font-bold text-3xl">{dataCourseById.name}</dd>
              <p className="text-xl font-normal max-w-[800px] text-white">
                {dataCourseById.description}
              </p>
              <div className="flex flex-row gap-3">
                <div className="text-sx">200 Rate</div>
                <div className="text-sx">300 Student</div>
              </div>
              <div>
                <p className="text-sx"> Created by Stephen Grider</p>
              </div>
              <div>
                <p className="text-sx"> Created at 23-03-2002</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-8 col-start-3">
          <div className="col-span-8 p-4">
            <div className="mt-6">
              <div>
                <p className="text-2xl font-medium">What will learn</p>
              </div>
              <div className="grid grid-cols-12 px-4 gap-4 mt-4">
                <div className="col-span-6 flex flex-row gap-2">
                  <CheckCircleIcon className="size-7" />
                  Build an amazing e-commerce marketplace application with React{" "}
                </div>
                <div className="col-span-6 flex flex-row gap-2">
                  <CheckCircleIcon className="size-7" />
                  Build an amazing e-commerce marketplace application with React{" "}
                </div>
                <div className="col-span-6 flex flex-row gap-2">
                  <CheckCircleIcon className="size-7" />
                  Build an amazing e-commerce marketplace application with React{" "}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <NavListComponent id={Number(courseId)} />
            </div>
          </div>
          <div className="col-span-4 mt-[-200px]">
            <div className="p-6">
              <img
                src="/thumbnail-detail-course/cs-50-thumbnail.jpg"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              {(dataFetchingEnrollment?.statusEnrollment === "WAITING" ||
                mutation.isSuccess) && (
                <button className="bg-green-800 hover:bg-green-900 px-5 py-2 rounded-lg text-white">
                  Waiting Admin Accept
                </button>
              )}

              {dataFetchingEnrollment?.statusEnrollment === "ACCEPTED" && (
                <button className="bg-green-800 hover:bg-green-900 px-5 py-2 rounded-lg text-white">
                  <NavLink to={`learn/lecture/1`}>Go To Course</NavLink>
                </button>
              )}
              {!mutation.isSuccess && isError && (
                <button
                  onClick={handleOpen}
                  className="bg-green-800 hover:bg-green-900 px-5 py-2 rounded-lg text-white"
                >
                  Enroll Course
                </button>
              )}
            </div>

            <div className="p-6">
              <div>
                <p className="text-lg font-medium">
                  This course includes: 100 video
                </p>
              </div>
              <div>
                <p className="text-lg font-medium">This course section: 50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCoursePageComponent;
