import {
  AttachMoney,
  ImportContactsOutlined,
  MoreVert,
  PeopleOutline,
  ScheduleOutlined,
  Star,
} from "@mui/icons-material";
import React, { useState } from "react";

const AllCourses = ({
  image,
  title,
  description,
  studentCount,
  Schedule,
  contacts,
  rating,
  price,
  teacherName,
  status,
}) => {
  const [value, setValue] = useState(44);  
  const textColor = "text-[#ACACAC]";

  return (
    <div
      className={`bg-white rounded-xl w-full sm:w-[32%] md:w-[32%] lg:w-[32%]`}
    >
      {/* courseImage div */}
      <div className="relative">
        <img src={image} className="w-full h-[15rem] object-cover" />
        <span
          className={`absolute top-2 right-2 text-sm px-2 py-1 rounded-lg font-semibold 
        ${status === "Active" ? "bg-[#ddeedd] text-[green]" : ""}
        ${status === "Coming Soon" ? "bg-[#ededf5] text-[blue]" : ""}
        ${status === "Draft" ? "bg-[#faf2ac] text-[#996401]" : ""}
        `}
        >
          {status}
        </span>
      </div>
      <div className="w-full p-5">
        {/* title */}
        <div className="flex justify-between items-center pt-1 pb-5">
          <h2 className="text-[17px] font-semibold whitespace-nowrap">
            {title}
          </h2>
          <MoreVert className="cursor-pointer" />
        </div>
        {/* description */}
        <p className={`text-sm ${textColor} whitespace-rap break-all mb-4 leading-5 text-wrap truncate h-10.5`}>
          {description}
        </p>
        {/* Information */}
        <div
          className={`flex justify-start items-center gap-5 text-sm ${textColor} mb-4`}
        >
          <div>
            <PeopleOutline className="mr-1.5" />
            {studentCount}
          </div>
          <div>
            <ScheduleOutlined className="mr-1.5" />
            {Schedule} weeks
          </div>
          <div>
            <ImportContactsOutlined className="mr-1.5" />
            {contacts}
          </div>
        </div>
        {/* Rating and Price */}
        <div
          className={`flex justify-between items-center font-semibold  text-sm mb-4`}
        >
          <div>
            <Star className="text-[#FEAF00] text-xs" />
            {rating}
          </div>
          <div className="flex items-center text-[#FEAF00] text-lg">
            <AttachMoney />
            {price}
          </div>
        </div>
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between font-bold mb-2 ">
            <div className={`${textColor} text-[14.5px]`}>Progress</div>
            <div>{value}%</div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full accent-[#FEAF00] cursor-pointer"
          />
        </div>
        {/* teacher */}
        <div className={`text-xs ${textColor} mt-2`}>
          by <span className="font-medium">{teacherName}</span>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
