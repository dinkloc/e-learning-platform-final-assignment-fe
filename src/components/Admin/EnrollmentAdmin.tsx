import dayjs from "dayjs";
import { useState } from "react";

import Instance from "../../services/instance";
import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

const EnrollmentAdmin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [srcImage, setSrcImage] = useState<string>("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const fetchEnrollmentData = async () => {
    try {
      const res = await Instance.get("/enrollment");
      const { data } = res;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["enrollments"],
    queryFn: fetchEnrollmentData,
    staleTime: Infinity,
  });

  if (isPending) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Erorrs</h1>;
  }

  const Table_Header = [
    "NO",
    "Student Name",
    "Email",
    "Course",
    "Status",
    "Enrollment Date",
    "Enrollment Accept Date",
    "Image Student Card",
    "Action",
  ];

  return (
    <>
      <div className="py-4 px-6 mt-10">
        <table className="w-full min-w-max table-auto text-center">
          <thead className="">
            <tr>
              {Table_Header.map((value, index) => (
                <th key={index + 1}>
                  <p className="font-medium">{value}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((value: any, index: any) => (
              <tr key={index + 1} className="even:bg-blue-gray-50/50">
                <td className="p-4">{index}</td>
                <td className="p-4">{value.user_user_name}</td>
                <td className="p-4">{value.user_email}</td>
                <td className="p-4">{value.course_name}</td>
                <td className="p-4">
                  <Chip
                    size="sm"
                    variant="ghost"
                    value={value.status_enrollment}
                    color={
                      value.status_enrollment === "WAITING" ? "yellow" : "green"
                    }
                  />
                </td>
                <td className="p-4">
                  {dayjs(value.enrollment_date).format("YYYY-MM-DD")}
                </td>
                <td className="p-4">
                  {dayjs(value.enrollment_accept).format("YYYY-MM-DD")}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => {
                      handleOpen();
                      setSrcImage(value.url_image_student_card);
                    }}
                  >
                    Open Image
                  </button>
                </td>
                <td className="p-4">
                  {value.status_enrollment === "WAITING" ? (
                    <div className="flex gap-2 justify-center items-center">
                      <button className="bg-green-800 hover:bg-green-900 py-1 px-4 rounded-lg text-white">
                        Accept
                      </button>
                      <button className="bg-red-800 hover:bg-red-900 py-1 px-4 rounded-lg text-white">
                        Reject
                      </button>
                    </div>
                  ) : (
                    <button>See more information</button>
                  )}
                </td>
              </tr>
            ))}

            <tr className="even:bg-blue-gray-50/50">
              <td className="p-4">1</td>
              <td className="p-4">DinhLoc</td>
              <td className="p-4">nguyendinhloc502@gmail.com</td>
              <td className="p-4">CS50 Harvard</td>
              <td className="p-4">
                <Chip
                  size="sm"
                  variant="ghost"
                  value="ACCEPTED"
                  color={"green"}
                />
              </td>
              <td className="p-4">05/17/2024</td>
              <td className="p-4">05/20/2024</td>
              <td className="p-4">See Image</td>
              <td className="p-4">Accept</td>
            </tr>
            <tr className="even:bg-blue-gray-50/50">
              <td className="p-4">1</td>
              <td className="p-4">DinhLoc</td>
              <td className="p-4">nguyendinhloc502@gmail.com</td>
              <td className="p-4">CS50 Harvard</td>
              <td className="p-4">
                <Chip
                  size="sm"
                  variant="ghost"
                  value="ACCEPTED"
                  color={"green"}
                />
              </td>
              <td className="p-4">05/17/2024</td>
              <td className="p-4">05/20/2024</td>
              <td className="p-4">See Image</td>
              <td className="p-4">Accept</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Student Image Card</DialogHeader>
        <DialogBody>
          <div className="flex justify-center items-center">
            <img className="h-[300px]" src={srcImage} alt="" />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EnrollmentAdmin;
