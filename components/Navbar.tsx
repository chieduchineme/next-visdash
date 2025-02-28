import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Avatar, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import styles from '../styles/navbar.module.css';
import { RootState } from "../redux/store";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const navbarTitle = useSelector((state: RootState) => state.navbar.title);

  return (
    <>
      <div className={styles.navbar}>
        <AppBar position="fixed" color="inherit" sx={{ backgroundColor: "white" }} className="shadow-md px-4">
          <Toolbar className="flex justify-between">
            {/* Left Side: Toggle Button and App Title */}
            <div className="flex items-center gap-4">
              <IconButton onClick={toggleSidebar}>
                {isSidebarOpen ?
                <IconButton
                  // className="hidden xl:flex"
                  sx={{
                  width: 30,
                  height: 30,
                  background: `url('/New/blackGood.svg') center/cover no-repeat`,
                  }}
                />
                 : <MenuIcon />}
              </IconButton>
              <Typography
                variant="h6"
                fontWeight="bold"
                className={`hidden lg:flex text-black ${isSidebarOpen ? "hidden" : "block"}`}
              >
                Soar Task
              </Typography>
            </div>

            {/* Dynamic Navbar Title */}
            <Typography
              variant="h6"
              fontWeight="bold"
              className="absolute left-1/2 transform -translate-x-1/2 text-black mx-auto"
            >
              {navbarTitle}
            </Typography>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex ml-[40em]">
              <SearchBar className="rounded-full max-w-md" />
            </div>

            {/* Right Side: Icons and Profile */}
            <div className="flex items-center gap-4">
              <IconButton
                className="hidden xl:flex"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `url('/New/settingIcon.svg') center/cover no-repeat`,
                }}
              />
              <IconButton
                className="hidden xl:flex"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `url('/New/notificationIcon.svg') center/cover no-repeat`,
                }}
              />
              <IconButton
                // className="hidden xl:flex"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `url('/New/profilePhoto.svg') center/cover no-repeat`,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      {/* Mobile Search Bar */}
      <div className="block lg:hidden px-4 py-2">
        <SearchBar className="rounded-full mx-auto" />
      </div>
    </>
  );
};

export default Navbar;
