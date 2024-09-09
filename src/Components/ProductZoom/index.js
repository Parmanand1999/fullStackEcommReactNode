import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
const ProductZoom = () => {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    var setting2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
      };
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
      };
    
      const Goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
      };
  return (
    <>
      <div className="">
        <div className="productZoom position-relative">
          <div className="badge badge-primary">23%</div>
          <Slider {...setting2} className="zoomSliderBig" ref={zoomSliderBig}>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x540.jpg"
                }
                className="w-100"
              />
            </div>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x540.jpg"
                }
                className="w-100"
              />
            </div>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-600x540.jpg"
                }
                className="w-100"
              />
            </div>
          </Slider>
        </div>

        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
          <div className="item">
            <img
              src={
                "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x540.jpg"
              }
              alt=""
              className="w-100"
              onClick={() => Goto(0)}
            />
          </div>

          <div className="item">
            <img
              src={
                "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x540.jpg"
              }
              alt=""
              className="w-100"
              onClick={() => Goto(1)}
            />
          </div>
          <div className="item">
            <img
              src={
                "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-600x540.jpg"
              }
              alt=""
              className="w-100"
              onClick={() => Goto(2)}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ProductZoom;
