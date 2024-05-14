import {
  Bars4Icon,
  ChevronDownIcon,
  NewspaperIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function CourseList() {
  const navListMenuItems = [
    {
      title: "Trại Code 300: Advanced Algorithms",
      description: "Prep for interview.",
    },
    {
      title: "Trại Code 100: Python for beginner",
      description: "Great for absolute beginners",
    },
    {
      title: "Trại Code 101: Introduction Course",
      description: "Great for absolute, but seriously",
    },
    {
      title: "Trại Code 200: DS&A",
      description: "Intermediate Level",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a href="/" key={key + 1}>
      <MenuItem className="flex items-center gap-3 py-2 rounded-lg">
        <div className="px-4">
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sx font-bold w-[200px]"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-sx font-base text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 28 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <h1 className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Course
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </h1>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

export default CourseList;
