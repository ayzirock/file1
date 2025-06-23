import React, { useRef, useState } from "react";
import {
  CameraAltOutlined,
  Close,
  InfoOutline,
  PersonOutline,
} from "@mui/icons-material";

const AddNewStudentPage = ({
  forStudentInfo,
  setForStudentInfo,
  setSubmitFormData,
  name,
  email,
  phone,
  enrollNum,
  date,
  setName,
  setEmail,
  setPhone,
  setEnrollNum,
  setDate,
  nameError,
  emailError,
  phoneError,
  enrollNumError,
  dateError,
  setNameError,
  setEmailError,
  setPhoneError,
  setEnrollNumError,
  setDateError,
  imagePreview,
  setImagePreview,
  // imagePreviewError,
  // setImagePreviewError,
  handleTimeoutError,
  setHandleTimeoutError,
  forEditBtn,
  studentDataList,
  setStudentDataList,
  defaultImage,
  keyValue,
  forEditIndex
}) => {
  const fileRef = useRef(null);

  const imageHandling = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameError = (e) => {
    const val = e.target.value;

    if (/^[a-zA-Z\s]*$/.test(val)) {
      setName(val);

      if (handleTimeoutError) clearTimeout(handleTimeoutError);

      const timeout = setTimeout(() => {
        setNameError(val.length < 1 || val.length > 14);
      }, 1000);

      setHandleTimeoutError(timeout);
    }
  };

  const handleEmailError = (e) => {
    const val = e.target.value;
    setEmail(val);

    if (handleTimeoutError) clearTimeout(handleTimeoutError);

    const timeout = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailRegex.test(val));
    }, 1000);

    setHandleTimeoutError(timeout);
  };

  const handlePhoneError = (e) => {
    const val = e.target.value;

    if (/^\d*$/.test(val)) {
      setPhone(val);

      if (handleTimeoutError) clearTimeout(handleTimeoutError);

      const timeout = setTimeout(() => {
        setPhoneError(!/^\d{11}$/.test(val));
      }, 1000);

      setHandleTimeoutError(timeout);
    }
  };
  const handleEnrollNumError = (e) => {
    const val = e.target.value;

    if (/^\d*$/.test(val)) {
      setEnrollNum(val);

      if (handleTimeoutError) clearTimeout(handleTimeoutError);

      const timeout = setTimeout(() => {
        setEnrollNumError(!/^\d{16}$/.test(val));
      }, 1000);

      setHandleTimeoutError(timeout);
    }
  };
  const handleDateError = (e) => {
    setDate(e.target.value);

    if (handleTimeoutError) clearTimeout(handleTimeoutError);
    if (dateError) {
      const timeout = setTimeout(() => {
        setDateError(false);
      }, 1000);
      setHandleTimeoutError(timeout);
    }
  };

  const formFieldsData = [
    {
      id: "name",
      name: "Name",
      type: "name",
      maxlength: "14",
      inputMode: "",
      placeholder: "Enter Your Name",
      value: name,
      onChange: handleNameError,
      error: nameError,
      errorMsg: "Enter your name",
    },
    {
      id: "email",
      name: "Email",
      type: "name",
      maxlength: "",
      inputMode: "",
      placeholder: "Enter Email Address",
      value: email,
      onChange: handleEmailError,
      error: emailError,
      errorMsg: "Enter valid email address",
    },
    {
      id: "phone",
      name: "Phone",
      type: "text",
      maxlength: "11",
      inputMode: "numeric",
      placeholder: "Enter Phone Number",
      value: phone,
      onChange: handlePhoneError,
      error: phoneError,
      errorMsg: "Phone number must be 11 digits",
    },
    {
      id: "enrollNum",
      name: "Enroll Number",
      type: "text",
      maxlength: "16",
      inputMode: "numeric",
      placeholder: "Enter Enroll Number",
      value: enrollNum,
      onChange: handleEnrollNumError,
      error: enrollNumError,
      errorMsg: "Enroll number must be 16 digits",
    },
    {
      id: "doa",
      name: "Date of admission",
      type: "date",
      inputMode: "",
      maxlength: "",
      placeholder: "",
      value: date,
      onChange: handleDateError,
      error: dateError,
      errorMsg: "Select current date",
    },
  ];

  const handleClose = () => {
    setImagePreview(defaultImage);
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
    setSubmitFormData(false);
    setForStudentInfo(false);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const nameValid = name.length >= 3 && name.length <= 14;
    setNameError(!nameValid);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email);
    setEmailError(!emailValid);

    const phoneValid = phone.length === 11;
    setPhoneError(!phoneValid);

    const enrollNumValid = enrollNum.length === 16;
    setEnrollNumError(!enrollNumValid);

    const dateValid = date;
    setDateError(!dateValid);

    if (
      nameValid &&
      emailValid &&
      phoneValid &&
      enrollNumValid &&
      dateValid
    ) {
      setSubmitFormData(true);
      console.log("Form Submitted Successfully");
      setForStudentInfo(false);

      const newStudent = {
        name,
        email,
        phone,
        enrollNum,
        date,
        image: imagePreview || defaultImage,
      };
      
      let updatedList = [];

      if (forEditBtn && forEditIndex !== null) {
        updatedList = [...studentDataList];
        updatedList[forEditIndex] = newStudent;
      } else {
        updatedList = [newStudent, ...studentDataList];
      }
      setStudentDataList(updatedList);
      localStorage.setItem(keyValue, JSON.stringify(updatedList));
    } else {
      setSubmitFormData(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-[#0000008a] bg-opacity-50 z-50 ${
        forStudentInfo ? "block" : "hidden"
      }`}
    >
      {/* Student Info Form Div */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#FFFFFF] w-150 h-150 rounded-l-lg overflow-y-auto p-6 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          forStudentInfo ? "opacity-100" : "opacity-0"
        }`}
      >
        <form action="" onSubmit={submitForm}>
          <div className="flex justify-between items-center mb-5">
            <div className=" flex justify-center items-center">
              <div>
                <PersonOutline />
              </div>
              <div className="text-xl font-bold px-2">
                <h1>Student Information</h1>
              </div>
            </div>
            <span
              className="text-4xl cursor-pointer"
              onClick={() => handleClose()}
            >
              <Close />
            </span>
          </div>
          {/* Line Div */}
          <div className="mt-3 border-b-1 border-[#E5E5E5]"></div>
          {/* Upload Photo Div */}
          <div className="flex items-center mt-5">
            <div>
              <CameraAltOutlined />
            </div>
            <div className="px-2 font-semibold">
              <h3>Profile Photo</h3>
            </div>
          </div>
          {/* Photo Box Div */}
          <div>
            <div
              className={`w-137 h-30 mx-auto mt-5 mb-2 rounded-lg border border-[#E5E5E5]
              flex items-center bg-[#f4fcff]`}
            >
              <div className="flex justify-center items-center p-4">
                <div className="relative w-20 h-20 rounded-full border border-dashed bg-[#FFFFFF] border-gray-300 flex items-center justify-center overflow-hidden">
                  <input
                    type="file"
                    ref={fileRef}
                    id="upload-photo"
                    accept="image/*"
                    onChange={imageHandling}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <img
                    src={imagePreview || defaultImage}
                    alt="image"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="imagePreview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[11px] text-gray-500 text-center leading-4.5 break-words">
                        Upload Image
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
              <div className="mx-4">
                <label
                  htmlFor="upload-photo"
                  className="py-2 px-5 rounded-sm text-[#FFFFFF] bg-[#FEAF00] cursor-pointer"
                >
                  Choose File
                </label>
                <p className="text-[10px] text-[#6C6C6C] pt-3">
                  JPG,PNG or GIF (max 5MB)
                </p>
              </div>
            </div>
            {/* <div className="min-h-5">
              {imagePreviewError && (
                <p className="text-red-400 text-sm">Please select your image</p>
              )}
            </div> */}
          </div>
          <div className="flex items-center mt-5">
            <div>
              <InfoOutline />
            </div>
            <div className="px-2 font-semibold">
              <h3>Personal Information</h3>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-5 flex-row flex-wrap mt-5">
            {formFieldsData.map((field,index) => (
              <div key={index}>
                <div className="py-2 text-[14px] font-medium text-[#6C6C6C]">
                  <label htmlFor={field.id}>
                    {field.name}
                    <span className="pl-1 text-red-500">*</span>
                  </label>
                </div>
                <div>
                  <input
                    className={`rounded-sm w-[258px] h-[34px] px-2 border ${
                      field.error ? "border-red-500 text-red-500" : "border-[#E5E5E5]"
                    }`}
                    id={field.id}
                    type={field.type}
                    maxLength={field.maxlength}
                    inputMode={field.inputMode}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <div className="h-5 my-2">
                    {field.error && field.errorMsg && (
                      <p className="text-red-500 text-xs">{field.errorMsg}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Button Div */}
          <div className="flex justify-end items-center mt-7">
            <div>
              <button
                type="button"
                className="py-2 px-6 mr-5 rounded-sm bg-[#e7e7e7] cursor-pointer"
                onClick={() => handleClose()}
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-6 rounded-sm text-[#FFFFFF] bg-[#FEAF00] cursor-pointer"
              >
                {!forEditBtn ? "Add Student" : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewStudentPage;
