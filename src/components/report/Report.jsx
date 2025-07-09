import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Report = () => {
  const { sidebarOpen } = useOutletContext();
  return (
    <div className="bg-[#F8F8F8] min-h-[calc(100vh-60px)]">
      Report
    </div>
  )
}

export default Report
