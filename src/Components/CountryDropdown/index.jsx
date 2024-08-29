import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState();
  const [countryList, setCountryList] = useState([]);
  const context = useContext(MyContext);
  const selectCountry = (index, country) => {
    setselectedTab(index);
    context.setSelectedCountry(country);
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    if (keyword === "") {
      setCountryList(context.countryList);  
      return;
    }
    
    const list = context.countryList.filter((item) => {
      return item.country.toLowerCase().includes(keyword);
    });

    setCountryList(list);
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column ">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry?.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Select Location"}
          </span>
        </div>

        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        className="locationModal"
        TransitionComponent={Transition}
        onClick={() => setisOpenModal(false)}
      >
        <h3 className="">Choose Your Delivery Location</h3>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>
        <div
          className="headerSearch w-100"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            placeholder="Search Your Area..."
            onChange={filterList}
          />
          <Button className="">
            <IoSearch />{" "}
          </Button>
        </div>
        <ul className="countryList mt-3 ">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => selectCountry(index, item.country)}
                  className={`${selectedTab === index ? "active" : ""}`}
                >
                  <Button>{item.country}</Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
