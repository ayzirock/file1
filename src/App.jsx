import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Students from "./components/students/Students";
import Course from "./components/course/Course";
import Payment from "./components/payment/Payment";
import Report from "./components/report/Report";
import Settings from "./components/setting/Settings";
import Signin from "./components/signin/Signin";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="students" element={<Students />} />
          <Route path="payment" element={<Payment />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
