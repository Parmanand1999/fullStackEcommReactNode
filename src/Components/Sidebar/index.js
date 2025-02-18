import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [value, setValue] = useState([100, 1000]);
  

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
            <h6>PRODUCT CATEGORIES</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="women"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="filterBox">
            <h6>Filter by price</h6>

            <RangeSlider
              value={value}
              onInput={setValue}
              min={100}
              max={6000}
              step={5}
            />
            <div className="d-flex pt-2 priceRange">
              <span>
                From: <strong className="text-success">Rs:{value[0]}</strong>
              </span>
              <span className="mi-auto">
                From:{" "}
                <strong className="text-success">
                  Rs:
                  {value[1]}
                </strong>
              </span>
            </div>
          </div>
          <div className="filterBox">
            <h6>Product Status</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="In Stock"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="On sale"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>Brands</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Frito Lay"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Nespresso"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Oreo"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Quaker"
                  />
                </li>

                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox defaultChecked />}
                    label="Welch's"
                  />
                </li>
              </ul>
            </div>
          </div>

          <Link>
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
              alt=""
              className="w-100"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
