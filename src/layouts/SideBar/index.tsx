import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  UsersIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { UserMinusIcon } from "@heroicons/react/24/solid";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const navigate = useNavigate();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-full w-full max-w-[20rem]  p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          ADMIN
        </Typography>
      </div>
      <List>
        <ListItem
          onClick={() => {
            navigate("/admin/dashboard");
          }}
        >
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Overview
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/admin/enrollment");
          }}
        >
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Enrollment
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/admin/user");
          }}
        >
          <ListItemPrefix>
            <UserMinusIcon className="h-5 w-5" />
          </ListItemPrefix>
          User
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Course
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Quiz
        </ListItem>
      </List>
    </Card>
  );
}
