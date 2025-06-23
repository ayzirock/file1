import React, { useContext } from "react";
import { Svg1, Svg2, Svg3, Svg4 } from "./SVGs";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const sidebarOpen = useContext(UserContext);
  return (
    <div
      className={`flex ${
        sidebarOpen ? "flex-wrap" : "justify-evenly"
      } bg-[#FDFDFD] min-h-[calc(100vh-60px)] transition-all duration-700 ease-in-out`}
    >
      <Count
        iconC={<Svg1 />}
        nameC="Students"
        countC={243}
        bgColorC=" bg-[#F0F9FF]"
      />
      <Count
        iconC={<Svg2 />}
        nameC="Course"
        countC={13}
        bgColorC=" bg-[#FEF6FB]"
      />
      <Count
        iconC={<Svg3 />}
        nameC="Payments"
        countC={"INR 556,000"}
        bgColorC=" bg-[#FEFBEC]"
      />
      <Count
        iconC={<Svg4 />}
        nameC="Users"
        countC={3}
        bgColorC=" bg-gradient-to-r from-[#FEAF00] to-[#F8D442]"
      />
    </div>
  );
};

export default Home;

const Count = ({ iconC, nameC, countC, bgColorC }) => {
  const sidebarOpen = useContext(UserContext);
  return (
    <div className={` ${!sidebarOpen ? "w-[250px] h-[177px]":"w-[230px] h-[157px]"} rounded-[8px] p-5 m-5 ${bgColorC}`}>
      <span className="text-[48px] text-[#74C1ED] ">{iconC}</span>
      <div className="text-[14px] py-2 font-normal text-[#6C6C6C]">{nameC}</div>
      <div className=" flex justify-end font-bold text-[25.5px] pt-4 ">
        {countC}
      </div>
    </div>
  );
};
