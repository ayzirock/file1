import React from "react";
import { Svg1, Svg2, Svg3, Svg4 } from "./SVGs";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { studentDataList, dummyCourseCount } = useOutletContext();
  return (
    <div
      className={`flex justify-between bg-[#FDFDFD] min-h-[calc(100vh-60px)] transition-all duration-700 ease-in-out`}
    >
      <Box
        icon={<Svg1 />}
        name="Students"
        count={studentDataList.length || 0}
        bgColor=" bg-[#F0F9FF]"
      />
      <Box
        icon={<Svg2 />}
        name="Course"
        count={dummyCourseCount}
        bgColor=" bg-[#FEF6FB]"
      />
      <Box
        icon={<Svg3 />}
        name="Payments"
        count={"INR 55,000"}
        bgColor=" bg-[#FEFBEC]"
      />
      <Box
        icon={<Svg4 />}
        name="Users"
        count={3}
        bgColor=" bg-gradient-to-r from-[#FEAF00] to-[#F8D442]"
      />
    </div>
  );
};

export default Home;

const Box = ({ icon, name, count, bgColor}) => {
  const { sidebarOpen } = useOutletContext();
  return (
    <div
      className={`rounded-lg m-5 p-5 transition-all h-[187px] ease-in-out duration-700 flex-1 ${bgColor}`}
    >
      <div className="text-[48px] text-[#74C1ED] py-2">{icon}</div>
      <div className="text-[14px] py-2 font-normal text-[#6C6C6C]">{name}</div>
      <div className=" flex justify-end font-bold text-[25.5px] pt-5">
        {count}
      </div>
    </div>
  );
};
