import React, { useState } from "react";
import { Clear, SearchOutlined } from "@mui/icons-material";

const SearchBox = ({ data = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  //   const data = [
  //     "Apple",
  //     "Banana",
  //     "Orange",
  //     "Mango",
  //     "Grapes",
  //     "Watermelon",
  //     "Watermelon",
  //   ];

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="pr-6">
        <input
          className={`w-53 h-[37px] pl-3.5 pr-8.5 rounded-lg outline-none border border-[#E5E5E5] placeholder:text-[#E5E5E5]`}
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm ? (
          <span className="text-[#E5E5E5] relative right-7.5 cursor-pointer">
            <Clear />
          </span>
        ) : (
          <span className="text-[#E5E5E5] relative right-7.5 cursor-pointer">
            <SearchOutlined />
          </span>
        )}
      </div>

      {/* <ul className="mt-4 bg-white shadow rounded-md">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-b-0 hover:bg-gray-100"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500 italic">No matches found</li>
        )}
      </ul> */}
    </div>
  );
};

export default SearchBox;
