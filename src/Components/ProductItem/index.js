import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import ProductModal from "../ProductModal";

const ProductItem = ({ itemView }) => {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const viwProductDetails = () => {
    setIsOpenProductModal(!isOpenProductModal);
  };
  const closeProductModal = () => {
    setIsOpenProductModal(!isOpenProductModal);
  };

  return (
    <>
      <div className={` productItem ${itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
            alt=""
            className="w-100"
          />

          <span className="badge badge-primary">28%</span>
          <div className="action">
            <Button onClick={() => viwProductDetails(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>Werther’s Original Caramel Hard Candies</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            name="read-only"
            value={4}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex ">
            <span className="oldPrice mr-1">$20.00</span>
            <span className="netPrice text-danger">$14.00</span>
          </div>
        </div>
      </div>
      {isOpenProductModal === true && (
        <ProductModal closeProductModal={closeProductModal} />
      )}
    </>
  );
};

export default ProductItem;
