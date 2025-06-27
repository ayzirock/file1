import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const PaymentDataList = ({
  index,
  name,
  paymentSchedule,
  billNumber,
  paidAmount,
  balanceAmount,
  date,
  sidebarOpen,
}) => {
  const [hideInfo, setHideInfo] = useState({});

  const toggleData = (id) => {
    setHideInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const visibleBtn = hideInfo[index] ?? false;

  return (
    <div
      key={index}
      className={`flex items-center h-13 ${
        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F8F8F8]"
      }`}
    >
      <div className={`grid justify-evenly ${
            sidebarOpen
              ? "grid-cols-[140px_180px_130px_140px_170px_220px_0px]"
              : "grid-cols-[170px_210px_170px_170px_200px_220px_0px] pl-10"
          } items-center font-normal text-[14px]`} >
        <div className="pl-1">
          {hideInfo[index] ? (
            <div className="font-semibold text-[16px]">•••••••</div>
          ) : (
            name
          )}
        </div>
        <div>
          {hideInfo[index] ? (
            <div className="font-semibold text-[16px]">••••••</div>
          ) : (
            paymentSchedule
          )}
        </div>
        <div>
          {hideInfo[index] ? (
            <div className="font-semibold text-[16px]">•••••••••••</div>
          ) : (
            billNumber
          )}
        </div>
        <div>
          {hideInfo[index] ? (
            <div className="font-semibold text-[16px]">•••••••••••••</div>
          ) : (
            paidAmount
          )}
        </div>
        <div>
          {hideInfo[index] ? (
            <div className="font-semibold text-[16px]">•••••••••••••</div>
          ) : (
            balanceAmount
          )}
        </div>
        <div>
          {hideInfo[index] ? (
            <div className="font-semibold text-[16px]">•••••••••••••</div>
          ) : (
            date
          )}
        </div>
        <div
          onClick={() => toggleData(index)}
          className="text-[#FEAF00] cursor-pointer"
        >
          {!visibleBtn ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
        </div>
      </div>
    </div>
  );
};

export default PaymentDataList;
