import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <UserContext.Provider value={sidebarOpen}>
      {/* ...Layout... */}
      <div className="flex">
        <SideBar sidebarOpen={sidebarOpen} />
        <div className="flex flex-1 flex-col">
          <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <Outlet context={{ sidebarOpen, setSidebarOpen }} />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Dashboard;
