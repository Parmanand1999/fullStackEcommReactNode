import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.jpeg";
import CountryDropdown from "../CountryDropdown/index";

import { Button } from "@mui/material";
import SearchBox from "./SearchBox";

import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
const Header = () => {
  const contex=useContext(MyContext)
  return (
    <>
      <div className="headerWrapper ">
        <div className="top-strip bg-blue">
          <div className="container ">
            <p className=" mb-0 mt-0 text-center ">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container ">
            <div className="row">
              <div className="logoWrapper d-flex align-item-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="not found" />{" "}
                </Link>
              </div>

              <div className=" col-sm-10 d-flex aline-item-center  part2">
              {
                contex.countryList.length!==0&&<CountryDropdown />

              }
                
                <SearchBox />

                <div className="part3 d-flex align-item-center ml-auto">
                  <Button className="circle mr-3">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex aline-item-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex aline-item-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation/>
        </div>
    </>
  );
};

export default Header;

