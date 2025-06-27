import React, { useState } from "react";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";

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
          <input
            className={`w-[212px] h-[37px] pl-[14px] pr-[34px] rounded-lg border border-[#E5E5E5] placeholder:<SearchOutlined />`}
            type="search"
            name="searchBox"
            id="searchBox"
            placeholder="Search..."
          />
          {/* <span className="text-[#E5E5E5] relative right-[30px]">
            <SearchOutlined />
          </span> */}
        </div>
        <div className="text-[#E5E5E5] mr-12 cursor-pointer">
          <NotificationsNoneOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;




