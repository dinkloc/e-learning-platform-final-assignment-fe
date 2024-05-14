import { useQuery } from "@tanstack/react-query";
import { AccordionBody } from "@material-tailwind/react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

import Instance from "../../services/instance";

type ListAllLessonProp = {
  sectionId: number;
};

const ListAllLesson: React.FC<ListAllLessonProp> = ({ sectionId }) => {
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
  if (isPendingLesson) {
    return (
      <AccordionBody>
        <div className="flex flex-col gap-1">
          <p className="pe-[2px]"></p>
          <div className="flex flex-row gap-2">
            <PlayCircleIcon className="size-6" />
            <p className="pt-[1px]">Loading</p>
          </div>
        </div>
      </AccordionBody>
    );
  }

  if (isErrorLesson) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {isPendingLesson && <h1>Loading</h1>}
      {dataLesson.map((value: any, index: any) => (
        <div key={index + 1}>
          <AccordionBody>
            <div className="flex flex-col gap-1">
              <p className="pe-[2px]">
                {index}. {value.lesson_name}
              </p>
              <div className="flex flex-row gap-2">
                <PlayCircleIcon className="size-6" />
                <p className="pt-[1px]">{value.minutes_per_lesson} min</p>
              </div>
            </div>
          </AccordionBody>
        </div>
      ))}
    </>
  );
};

export default ListAllLesson;
