import React, { useState } from "react";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import SearchBox from "../SearchBox/SearchBox";

const Header = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`justify-between h-[60px] items-center hidden sm:flex md:flex lg:flex bg-[#FFFFFF] sticky top-0`}
    >
      {/* Toggle button */}
      <div
        className="ml-9 cursor-pointer text-[#E5E5E5]"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </div>
      {/* search Box & Notification bell*/}
      <div className="flex items-center">
        <div className="pr-6">
          <SearchBox/>
        </div>
          <NotificationsNoneOutlined className="text-[#E5E5E5] mr-12" />
      </div>
    </div>
  );
};

export default Header;
