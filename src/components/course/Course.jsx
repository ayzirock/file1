import {
  FilterAltOutlined,
  ImportContactsOutlined,
  PeopleOutlineOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AllCourses from "./AllCourses";
import dummyCourseData from "./dummyCourseData.json";

const Course = () => {
  const [statusCheck, setStatusCheck] = useState("allstatus");
  const statusFilter =
    statusCheck === "allstatus"
      ? dummyCourseData
      : dummyCourseData.filter(
          (c) => c.status.toLowerCase().replace(" ", "") === statusCheck
        );

  const activeCount = dummyCourseData.filter(
    (c) => c.status.toLowerCase() === "active"
  ).length;

  const totalStudents = dummyCourseData.reduce(
    (sum, c) => sum + c.studentCount,
    0
  );

  const ratingCollect = dummyCourseData.reduce((sum, c) => sum + c.rating, 0);
  const averageRating = ratingCollect / dummyCourseData.length;

  // const courseImage1 =
  //   "https://img.freepik.com/free-vector/marketing-students-create-corporate-identity_335657-3061.jpg";
  // const courseImage2 =
  //   "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?uid=R199961279&ga=GA1.1.535890928.1747121390&semt=ais_hybrid&w=740";

  return (
    <div
      className={`bg-[#F8F8F8] min-h-[calc(100vh-60px)] transition-all duration-700`}
    >
      {/* Top */}
      <div className="mx-5 my-8 sticky top-15 z-50 bg-[#F8F8F8]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Courses</h1>
            <p className="font-semibold text-sm text-[#ACACAC]">
              Manage and organize your course content
            </p>
          </div>
          <button className="py-3 px-4 flex items-center whitespace-nowrap bg-[#FEAF00] text-[#FFFFFF] rounded-md cursor-pointer">
            <AddIcon className="pr-2" />
            Add Course
          </button>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-176px)]">
        {/* Small_Boxes */}
        <div className="flex justify-between items-center mx-5 gap-5">
          <SmallBoxes
            iconC={<ImportContactsOutlined fontSize="large" />}
            nameC="Total Courses"
            countC={dummyCourseData.length}
            textColorC="text-[#e72525]"
            bgColorC="bg-[#ffd6d6]"
          />
          <SmallBoxes
            iconC={<ImportContactsOutlined fontSize="large" />}
            nameC="Active Courses"
            countC={activeCount}
            textColorC="text-[green]"
            bgColorC="bg-[#d0fcdf]"
          />
          <SmallBoxes
            iconC={<PeopleOutlineOutlined fontSize="large" />}
            nameC="Total Students"
            countC={totalStudents}
            textColorC="text-[blue]"
            bgColorC="bg-[#d3e5fd]"
          />
          <SmallBoxes
            iconC={<StarBorderOutlined fontSize="large" />}
            nameC="Avg. Rating"
            countC={Number(averageRating.toFixed(1))}
            textColorC="text-[#996401]"
            bgColorC="bg-[#faf2ac]"
          />
        </div>
        {/* 3 filter div */}
        <div className="my-8 flex items-center mx-5 gap-5">
          <div className="outline outline-[#c2c2c2] cursor-pointer hover:outline-2 hover:outline-[#868686] bg-white font-medium rounded-lg inline-block px-3">
            <select
              id="categories"
              className="pr-11 py-3.5 outline-none border-none cursor-pointer"
            >
              <option value="allcategories">All Categories</option>
              <option value="categorie1">cat 1</option>
              <option value="categorie2">cat 2</option>
            </select>
          </div>
          <div 
          className="appearance-none outline-1 outline-[#c2c2c2] cursor-pointer hover:outline-2 hover:outline-[#868686] bg-white font-medium rounded-lg px-3"
          // className="appearance-none bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <select
              id="status"
              className="pr-11 py-3.5 outline-none border-none cursor-pointer"
              onChange={(e) => setStatusCheck(e.target.value)}
            >
              <option
                value="allstatus"
                className="hover:bg-[red] hover:text-white"
              >
                All Status
              </option>
              <option
                value="active"
                className="hover:bg-[red] hover:text-white"
              >
                Active
              </option>
              <option
                value="comingsoon"
                className="hover:bg-[red] hover:text-white"
              >
                Coming Soon
              </option>
              <option value="draft" className="hover:bg-[red] hover:text-white">
                Draft
              </option>
            </select>
          </div>
          <div className="outline outline-[#c2c2c2] hover:outline-2 hover:outline-[#868686] bg-white font-medium rounded-lg px-3">
            <FilterAltOutlined fontSize="large" className="pr-3.5" />
            <button id="status" className="py-2.5">
              More Filters
            </button>
          </div>
        </div>
        {/* Big_Boxes */}
        <div className="my-8 mx-5 flex justify-start flex-wrap gap-5">
          {statusFilter.map((course, index) => (
            <AllCourses
              key={index}
              index={index}
              image={course.image}
              status={course.status}
              title={course.title}
              description={course.description}
              studentCount={course.studentCount}
              Schedule={course.Schedule}
              contacts={course.contacts}
              rating={course.rating}
              price={course.price}
              teacherName={course.teacherName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;

const SmallBoxes = ({ iconC, nameC, countC, bgColorC, textColorC }) => {
  const { sidebarOpen } = useOutletContext();
  return (
    <div
      className={`inline-block rounded-lg flex-1 transition-all ease-in-out duration-700 bg-white`}
    >
      <div className="mx-5 my-8 flex items-center">
        <div className=" pr-10 flex-1">
          <div className="whitespace-nowrap text-[13.5px] font-semibold text-[#ACACAC]">
            {nameC}
          </div>
          <div className="whitespace-nowrap font-bold text-[28px]">
            {countC}
          </div>
        </div>
        <div className={`${textColorC} ${bgColorC} p-2 rounded-lg`}>
          <div>{iconC}</div>
        </div>
      </div>
    </div>
  );
};
