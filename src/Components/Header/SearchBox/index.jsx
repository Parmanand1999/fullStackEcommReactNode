import Button from "@mui/material/Button";
import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchBox = () => {
  return (
    <>
      <div className="headerSearch ml-3 mr-3">
        <input
          type="text"
          placeholder="Search for Product..."
        />
        <Button className="">
          <IoSearch/>{" "}
        </Button>
      </div>
    </>
  );
};

export default SearchBox;
