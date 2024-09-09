import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';
const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content_right">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                alt="not"
                className="w-100"
                style={{ borderRadius: "8px" }}
              />
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex btnWrapper">
                  <Button onClick={() => setProductView("one")} className={productView==='one'&&"act"}>
                    <IoIosMenu />
                  </Button>

                  <Button onClick={() => setProductView("three")}  className={productView==='three'&&"act"}>
                    <CgMenuGridR />
                  </Button>
                  <Button onClick={() => setProductView("four")}  className={productView==='four'&&"act"}>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="ml-auto showByfilter">
                  <Button onClick={handleClick}>
                    show 9<FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerPageDrop"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                    <MenuItem onClick={handleClose}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
              </div>

              <div className="d-fle aline-items-center justify-content-center mt-5">
                <Pagination count={10} color="primary" size="large" />
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
