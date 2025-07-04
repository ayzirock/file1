import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Students from "./components/studentComponent/Students";
import Course from "./components/courseComponents/Course";
import Payment from "./components/paymentComponent/Payment";
import Report from "./components/Report";
import Settings from "./components/Settings";
import Signin from "./components/Signin";
import Home from "./components/Home"; // You'll need to create this

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
