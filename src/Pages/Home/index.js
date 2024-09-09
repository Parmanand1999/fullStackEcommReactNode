import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/image/banner1.png";
import banner2 from "../../assets/image/banner2.jpg";
import banner3 from "../../assets/image/banner3.jpg";
import banner4 from "../../assets/image/banner4.jpg";
import coupon from "../../assets/image/coupon.webp";
import { Button} from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMailOutline } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <HomeCat />
      <HomeBanner />
      <section className="homeProduct">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} alt="not" className="cursor" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} alt="not" className="cursor" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd"> Best Sellers</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4 ">
                <Swiper
                  slidesPerView={4}
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
                </Swiper>
              </div>
              <div className="d-flex align-item-center mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd"> NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSection">
                <div className="bannerSec ">
                  <img src={banner3} alt="not" className="cursor" />
                </div>
                <div className="bannerSec">
                  <img src={banner4} alt="not" className="cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates <br />
                on promotions and coupons.
              </p>
              <form className="d-flex">
              <IoMailOutline/>
              <input placeholder="Your email Address"/>
              <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={coupon} alt="" />
            </div>
          </div>
        </div>
      </section>
      <br/>
    </>
  );
};

export default Home;
