import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";

const MenuUser = () => {
  return (
    <Menu>
      <MenuHandler>
        <button className="font-medium">User</button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <div>
            <Typography className="font-semibold text-base" color="black">
              Profile
            </Typography>
          </div>
        </MenuItem>
        <MenuItem>
          <div>
            <Typography className="font-semibold text-base" color="black">
              Edit
            </Typography>
          </div>
        </MenuItem>
        <MenuItem>
          <div>
            <Typography className="font-semibold text-base" color="black">
              Stat
            </Typography>
          </div>
        </MenuItem>
        <MenuItem>
          <div>
            <Typography className="font-semibold text-base" color="black">
              Logout
            </Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuUser;
