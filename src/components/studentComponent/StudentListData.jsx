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
  defaultImage
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
      <div className=" h-[85px] font-normal text-[14px] my-3 rounded-lg bg-[#FFFFFF]">
        <div
          className={`grid ${
            sidebarOpen
              ? "grid-cols-[100px_130px_180px_120px_155px_190px_150px]"
              : "grid-cols-[120px_150px_200px_140px_175px_260px_150px]"
          }  items-center`}
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
          <div className="capitalize">{name}</div>
          <div className="lowercase">{email}</div>
          <div>{phone}</div>
          <div>{enrollNum}</div>
          <div>{date}</div>
          <div className="w-[150px] flex justify-around items-center">
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
