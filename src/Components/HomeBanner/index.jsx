import React from "react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // slidesPerGroup={3}
          modules={[Navigation, Autoplay]}
          arrows={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/static_web_Stop_Life_10feaf9320/static_web_Stop_Life_10feaf9320.png"
                alt="not found"
                className="w-100"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_b62fcda2ba/static_web_Forever_New_AND_and_more_b62fcda2ba.png"
                alt="not found"
                className="w-100"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/static_web_Stop_Life_10feaf9320/static_web_Stop_Life_10feaf9320.png"
                alt="not found"
                className="w-100"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/static_web_Tommy_Hilfiger_Levis_and_more_b9ad3310f2/static_web_Tommy_Hilfiger_Levis_and_more_b9ad3310f2.png"
                alt="not found"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/static_web_Stop_Life_10feaf9320/static_web_Stop_Life_10feaf9320.png"
                alt="not found"
                className="w-100"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="item">
            <img
              src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_b62fcda2ba/static_web_Forever_New_AND_and_more_b62fcda2ba.png"
              alt="not found"
              className="w-100"
            />
          </div>
        </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
