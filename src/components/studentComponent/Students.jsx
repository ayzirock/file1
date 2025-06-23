import React, { useEffect, useRef, useState } from "react";
import AddNewStudentPage from "./AddNewStudentPage";
import StudentListData from "./StudentListData";
import { LoopOutlined, SwapVertOutlined } from "@mui/icons-material";
import { useOutletContext } from "react-router-dom";
import dummyStudentData from "./dummyStudentData.json";
import { Tooltip, tooltipClasses } from "@mui/material";
import styled from "styled-components";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FEAF00",
    color: "white",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#FEAF00",
  },
}));

const Students = () => {
  const { sidebarOpen } = useOutletContext();

  // Restrictions for feilds
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enrollNum, setEnrollNum] = useState("");
  const [date, setDate] = useState("");
  // Restrictions for feilds Error
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [enrollNumError, setEnrollNumError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const defaultImage =
    "https://as2.ftcdn.net/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
  const [imagePreview, setImagePreview] = useState(null);
  // const [imagePreviewError, setImagePreviewError] = useState(false);

  const [handleTimeoutError, setHandleTimeoutError] = useState(null);

  const [forStudentInfo, setForStudentInfo] = useState(false);
  const [submitFormData, setSubmitFormData] = useState(false);

  const [forEditBtn, setForEditBtn] = useState(false);
  const [forEditIndex, setForEditIndex] = useState(null);

  const [rotating, setRotating] = useState(false)

  const handleAddStudentButton = () => {
    setImagePreview(null);
    setName("");
    setEmail("");
    setPhone("");
    setEnrollNum("");
    setDate("");
    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setEnrollNumError(false);
    setDateError(false);
    // setImagePreviewError(false);

    setForStudentInfo(true);
    setForEditBtn(false);
  };

  const [visiableCounter, setVisiableCounter] = useState(7);

  const handleVisiableCounter = () => {
    setVisiableCounter(visiableCounter + 7);
  };

   const scrollRef = useRef(null);

  const handlingReloadBtn = () => {
    setRotating(true)
    setStudentDataList(studentDataList);
    setVisiableCounter(7);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    setTimeout(() => {
    setRotating(false);
  }, 200);
  };

  // const [studentDataList, setStudentDataList] = useState(dummyStudentData);
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

  const handlingEditBtn = (editIndex) => {
    const edit = studentDataList[editIndex];
    if (edit) {
      setImagePreview(edit.image);
      setName(edit.name);
      setEmail(edit.email);
      setPhone(edit.phone);
      setEnrollNum(edit.enrollNum);
      setDate(edit.date);

      setForEditIndex(editIndex);
      setForStudentInfo(true);
      setForEditBtn(true);
    }
  };

  const handlingDeleteBtn = (deleteIndex) => {
    const updatedList = studentDataList.filter(
      (_, index) => index !== deleteIndex
    );
    setStudentDataList(updatedList);
    localStorage.setItem(keyValue, JSON.stringify(updatedList));
  };

  return (
    <div className="bg-[#F8F8F8] min-h-[calc(100vh-60px)]">
      <div className=" p-5 sticky top-15">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[22px]">
            <h1>Students List</h1>
          </div>
          <div className="flex items-center">
            <div className="mr-7 text-[#FEAF00]">
              <SwapVertOutlined />
            </div>
            <div>
              <button
                onClick={handleAddStudentButton}
                className="w-[199px] h-11 bg-[#FEAF00] text-[#FFFFFF] rounded-sm cursor-pointer"
              >
                ADD NEW STUDENT
              </button>
            </div>
          </div>
        </div>
        {/* Line div */}
        <div className="mt-5 border-b-1 border-[#E5E5E5]"></div>
        {/* Table Header */}
          <div
            className={`w-full grid ${
              sidebarOpen
                ? "grid-cols-[100px_130px_180px_120px_155px_190px_150px]"
                : "grid-cols-[120px_150px_200px_140px_175px_260px_150px]"
            } items-center text-[12px] text-[#ACACAC] font-semibold mt-5`}
          >
            <div></div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Enroll Number</div>
            <div>Date of admission</div>
            <div className="flex justify-around items-center">
              {/* Reload Tooltip icon */}
              <CustomTooltip
                title="Reload List"
                placement="top"
                arrow
                PopperProps={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -5],
                      },
                    },
                  ],
                }}
              >
                <div
                  className={`cursor-pointer text-[#FEAF00] ${rotating ? "animate-spin":""}`}
                  onClick={handlingReloadBtn}
                >
                  <LoopOutlined />
                </div>
              </CustomTooltip>
              {/* Counter */}
              <div>
                {Math.min(visiableCounter, studentDataList.length || 0)}/
                {studentDataList.length || 0}
              </div>
            </div>
          </div>
      </div>

      <div ref={scrollRef} className="px-5 overflow-y-auto h-[400px]">
        {/* show visible data */}
        {studentDataList.slice(0, visiableCounter).map((value, index) => (
          <StudentListData
            key={index}
            index={index}
            image={value.image}
            name={value.name}
            email={value.email}
            phone={value.phone}
            enrollNum={value.enrollNum}
            date={value.date}
            editFunction={() => handlingEditBtn(index)}
            deleteFunction={() => handlingDeleteBtn(index)}
            sidebarOpen={sidebarOpen}
            forStudentInfo={forStudentInfo}
            setForStudentInfo={setForStudentInfo}
            defaultImage={defaultImage}
          />
        ))}

        {visiableCounter < studentDataList.length && (
          <div className="text-center mt-4">
            <button
              onClick={handleVisiableCounter}
              className="bg-[#FEAF00] text-[#FFFFFF] cursor-pointer px-4 py-3 mt-2 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {forStudentInfo && (
        <AddNewStudentPage
          forEditIndex={forEditIndex}
          defaultImage={defaultImage}
          keyValue={keyValue}
          name={name}
          email={email}
          phone={phone}
          enrollNum={enrollNum}
          date={date}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setEnrollNum={setEnrollNum}
          setDate={setDate}
          nameError={nameError}
          emailError={emailError}
          phoneError={phoneError}
          enrollNumError={enrollNumError}
          dateError={dateError}
          setNameError={setNameError}
          setEmailError={setEmailError}
          setPhoneError={setPhoneError}
          setEnrollNumError={setEnrollNumError}
          setDateError={setDateError}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          forStudentInfo={forStudentInfo}
          setForStudentInfo={setForStudentInfo}
          submitFormData={submitFormData}
          setSubmitFormData={setSubmitFormData}
          // imagePreviewError={imagePreviewError}
          // setImagePreviewError={setImagePreviewError}
          handleTimeoutError={handleTimeoutError}
          setHandleTimeoutError={setHandleTimeoutError}
          forEditBtn={forEditBtn}
          setForEditBtn={setForEditBtn}
          studentDataList={studentDataList}
          setStudentDataList={setStudentDataList}
        />
      )}
    </div>
  );
};

export default Students;
