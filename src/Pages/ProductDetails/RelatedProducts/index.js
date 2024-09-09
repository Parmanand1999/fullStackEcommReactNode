import React from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../../../Components/ProductItem";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@mui/material";


const RelatedProducts = ({title}) => {
  return (
    <>
      <div className="d-flex align-item-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd"> {title}</h3>
          
        </div>
       
      </div>

      <div className="product_row w-100 mt-1 ">
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation]}
          arrows={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;
