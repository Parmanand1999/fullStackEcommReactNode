import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecfffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
  ]);

  return (
    <>
      <section className="homeCat">
        <div className="container">
          <h4 className="mb-4 hd"> Feature Categories</h4>
          <Swiper
            slidesPerView={10}
            spaceBetween={5}
            navigation={true}
            slidesPerGroup={3}
            modules={[Navigation]}
            arrows={true}
            className="mySwiper"
          >
            {itemBg?.map((item) => {
              return (
                <SwiperSlide>
                  <div
                    className="item text-center"
                    style={{ background: item }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQk24LjyrbW6kE7AsuSWPB_Wf49eUvWwBSg&s"
                      alt=""
                    />
                    <h6>Red Apple</h6>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeCat;
