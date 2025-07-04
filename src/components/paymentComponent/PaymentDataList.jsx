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
      <div className={`grid gap-1 w-full grid-cols-[1fr_1.5fr_1.4fr_1.4fr_1.5fr_1.4fr_1.6fr] items-center font-normal text-[14px]`} >
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
          className="text-[#FEAF00] cursor-pointer text-center"
        >
          {!visibleBtn ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
        </div>
      </div>
    </div>
  );
};

export default PaymentDataList;
