import React from "react";
import { Accordion, AccordionHeader } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import Instance from "../../services/instance";
import ListAllLesson from "./ListAllLesson";

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

type NavListProp = {
  id: number;
};

const NavListComponent: React.FC<NavListProp> = ({ id }) => {
  const [open, setOpen] = React.useState<number>(0);
  const [sectionId, setSectionId] = React.useState<number>(0);

  const fetchDataSectionById = async (id: number) => {
    try {
      const res = await Instance.get(`section/${id}`);
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["section", id],
    queryFn: () => fetchDataSectionById(id),
    staleTime: Infinity,
  });

  const handleOpen = (value: number) => {
    setSectionId(value);
    setOpen(open === value ? 0 : value);
  };

  if (isPending) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {data.map((value: any, index: number) => (
        <Accordion
          key={index + 1}
          open={open === value.section_id}
          icon={<Icon id={value.section_id} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(value.section_id)}>
            {value.section_name}
          </AccordionHeader>
          <ListAllLesson sectionId={sectionId} />
        </Accordion>
      ))}
    </>
  );
};

export default NavListComponent;
