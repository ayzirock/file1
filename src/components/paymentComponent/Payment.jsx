import { SwapVertOutlined } from "@mui/icons-material";
import PaymentDataList from "./PaymentDataList";
import dummyPaymentData from "./dummyPaymentData.json";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// import { useOutletContext } from "react-router-dom";

const Payment = () => {
  // const { sidebarOpen } = useOutletContext();
  const sidebarOpen = useContext(UserContext);
  return (
    <div
      className={`bg-[#F8F8F8] min-h-[calc(100vh-60px)] transition-all duration-700 `}
    >
      <div className="sticky top-15 p-5 bg-[#F8F8F8]">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[22px]">
            <h1>Payment Details</h1>
          </div>
          <div className="text-[#FEAF00]">
            <SwapVertOutlined />
          </div>
        </div>
        <div className="mt-5 border-b-1 border-[#E5E5E5]"></div>
        <div
          className={`grid ${
            sidebarOpen
              ? "grid-cols-[140px_180px_130px_140px_170px_220px_0px]"
              : "grid-cols-[170px_210px_170px_170px_200px_220px_0px] pl-10"
          } items-center text-[12px] text-[#ACACAC] font-semibold mt-5`}
        >
          <div className="pl-1">Name</div>
          <div>Payment Schedule</div>
          <div>Bill Number</div>
          <div>Amount Paid</div>
          <div>Balance amount</div>
          <div>Date</div>
        </div>
      </div>
      <div className=" overflow-y-auto p-5 h-[449px]">
        {dummyPaymentData.map((value, index) => (
          <PaymentDataList
            key={index}
            index={index}
            name={value.name}
            paymentSchedule={value.paymentSchedule}
            billNumber={value.billNumber}
            paidAmount={value.paidAmount}
            balanceAmount={value.balanceAmount}
            date={value.date}
            sidebarOpen={sidebarOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Payment;
