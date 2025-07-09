import React, { useState } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import dummyStudentData from "../students/dummyStudentData.json"
import dummyCourseData from "../course/dummyCourseData.json";

const Dashboard = () => {
  
  const dummyCourseCount = dummyCourseData.length;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [visiableCounter, setVisiableCounter] = useState(7);
  const keyValue = "storeStudentsData";
  const [studentDataList, setStudentDataList] = useState(() => {
    const studentDataStore = localStorage.getItem(keyValue);
    if (!studentDataStore) {
      localStorage.setItem(keyValue, JSON.stringify(dummyStudentData));
      return dummyStudentData;
    }
    return JSON.parse(studentDataStore);
    // if (!studentData) return [];
    // return JSON.parse(studentData);
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    // ...Layout...
    <div className="block sm:flex md:flex lg:flex">
      <SideBar sidebarOpen={sidebarOpen} />
      <div className="flex flex-1 flex-col">
        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet
          context={{
            sidebarOpen,
            setSidebarOpen,
            visiableCounter,
            setVisiableCounter,
            keyValue,
            studentDataList,
            setStudentDataList,
            dummyCourseCount,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
