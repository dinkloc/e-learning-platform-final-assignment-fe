import { ChangeEvent, useState } from "react";
import Header from "../../layouts/Header/index";
import NavListComponent from "../NavListCourse";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import axios from "axios";

const DetailCoursePageComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  console.log(file);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setFile(undefined);
    setOpen(!open);
  };
  const handleSubmit = async () => {
    const data = new FormData();
    if (file) {
      data.append("file", file);
      data.append("userId", "1");
      data.append("courseId", "1");
    }
    console.log(data);
    const res = await axios.post("http://localhost:5000/enrollment", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
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
          <form action="">
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
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Header />
      <div className="grid grid-cols-12">
        <div className="bg-gray-300 h-[250px] w-full col-span-12"></div>
        <div className="grid grid-cols-12 col-span-8 col-start-3">
          <div className="col-span-8  p-4">
            <div>
              <dd className="font-bold text-2xl">
                Trai Code 100: Introduction to Python Programming
              </dd>
            </div>
            <div className="mt-6">
              <NavListComponent />
            </div>
          </div>
          <div className="col-span-4  mt-[-100px]">
            <div className="p-6">
              <img
                src="/thumbnail-detail-course/cs-50-thumbnail.jpg"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleOpen}
                className="bg-green-800 hover:bg-green-900 px-5 py-2 rounded-lg text-white"
              >
                Start Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCoursePageComponent;
