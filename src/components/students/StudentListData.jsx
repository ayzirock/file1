import React, { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";

const StudentListData = ({
  image,
  name,
  email,
  phone,
  enrollNum,
  date,
  editFunction,
  deleteFunction,
  sidebarOpen,
  defaultImage,
}) => {
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const DeleteBox = () => (
    <div
      className={`fixed inset-0 bg-[#0000008a] z-50 ${
        showConfirmBox ? "block" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FEAF00] w-[410px] h-32 rounded-lg p-5 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="text-white text-lg font-bold">Are you sure?</div>
        <div className="mt-5 flex justify-end gap-4">
          <button
            className="hover:bg-white bg-[#f5f4f4] px-4 py-2 rounded cursor-pointer"
            onClick={() => setShowConfirmBox(false)}
          >
            No
          </button>
          <button
            className="hover:bg-white bg-[#f5f4f4] px-4 py-2 rounded cursor-pointer"
            onClick={() => {
              deleteFunction();
              setShowConfirmBox(false);
              toast.success("Delete Successfully");
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="h-[85px] font-normal text-[14px] my-3 rounded-lg bg-[#FFFFFF]">
        <div
          className={`grid gap-1 items-center ${
            sidebarOpen
              ? "grid-cols-[1fr_1.30fr_1.80fr_1.20fr_1.55fr_1.90fr_1.50fr]"
              : "grid-cols-[1.2fr_1.5fr_2.0fr_1.4fr_1.75fr_2.6fr_1.5fr]"
          }`}
        >
          <div
            className={`w-15 h-20 flex items-center justify-center ${
              sidebarOpen ? "ml-[9px]" : "ml-3"
            }`}
          >
            <img
              className=" rounded-lg w-15 h-13 object-cover object-[50%_22%]"
              src={image || defaultImage}
            />
          </div>
          <div className="capitalize truncate">{name}</div>
          <div className="lowercase truncate">{email}</div>
          <div>{phone}</div>
          <div>{enrollNum}</div>
          <div>{date}</div>
          <div className="flex justify-around items-center">
            <div
              className="cursor-pointer text-[#FEAF00]"
              onClick={() => editFunction()}
            >
              <EditOutlined />
            </div>
            <div
              className="cursor-pointer text-[#FEAF00]"
              // onClick={() => deleteFunction()}
              onClick={() => setShowConfirmBox(true)}
            >
              <DeleteOutlined />
            </div>
          </div>
        </div>
      </div>
      <DeleteBox />
      <ToastContainer />
    </>
  );
};

export default StudentListData;
