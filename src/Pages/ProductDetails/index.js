import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import { Button, Rating, Tooltip } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";
const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeTabs, setActiveTabs] = useState(1);
  
  const isActive = (id) => {
    setActiveSize(id);
  };

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-7">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline">
                <li className="list-inline-items">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands</span>
                    <span>Welch's</span>
                  </div>
                </li>

                <li className="list-inline-items">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text- cursor ml-2">1 Reviwe</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ml-2">$14.00</span>
              </div>

              <span className="badge badge-success">IN STOCK</span>

              <p className="mt-2 ">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent. Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size/ weight:</span>
                <ul className=" d-flex list list-inline mb-0 pl-4">
                  <li className="list-inline-items">
                    <span
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </span>
                  </li>
                  <li className="list-inline-items">
                    <span
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </span>
                  </li>
                  <li className="list-inline-items">
                    <span
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </span>
                  </li>
                  <li className="list-inline-items">
                    <span
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </span>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-4">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-rounded">
                  <BsCartFill />
                  &nbsp; Add to cart
                </Button>
                <Tooltip title="Add to Wishlist" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className=" d-flex list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => setActiveTabs(0)}
                  >
                    {" "}
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => setActiveTabs(1)}
                  >
                    Additional information
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => setActiveTabs(2)}
                  >
                    Reviews (1)
                  </Button>
                </li>
              </ul>
            </div>

            {activeTabs === 0 && (
              <div className="tabContent">
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
                <hr />
                <p>
                  {" "}
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                  auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                  dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                  amet, maximus sagittis dolor. Vivamus nisi sapien, elementum
                  sit amet eros sit amet, ultricies cursus ipsum. Sed consequat
                  luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel
                  diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,
                  ipsum in vestibulum vulputate, lorem orci convallis quam, sit
                  amet consequat nulla felis pharetra lacus. Duis semper erat
                  mauris, sed egestas purus commodo vel.
                </p>
                <br />
                <h2>Packaging & Delivery</h2>
                <p>
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                  auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                  dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                  amet, maximus sagittis dolor.{" "}
                </p>

                <br />
                <h2>Suggested Use</h2>
                <p>
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                  auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                  dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                  amet, maximus sagittis dolor. Vivamus nisi sapien, elementum
                  sit amet eros sit amet, ultricies cursus ipsum. Sed consequat
                  luctus ligula.
                </p>
              </div>
            )}

            {activeTabs === 1 && (
              <div className="tabContent">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr class="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr class="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr class="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr class="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr class="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr class="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr class="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr class="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr class="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr class="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr class="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr class="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr class="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTabs === 2 && (
              <div className="tabContent">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Customer Questions & answer</h3>
                    <br />
                    <div className="card p-4   reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="img"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm{" "}
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt? Reply
                        </p>
                      </div>
                    </div>
                    <div className="card p-4   reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="img"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm{" "}
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                              small
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt? Reply
                        </p>
                      </div>
                    </div>
                    <div className="card p-4   reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="img"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm{" "}
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt? Reply
                        </p>
                      </div>
                    </div>
                    <div className="card p-4   reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="img"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm{" "}
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt? Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <form className="reviewForm">
                    <h4>Add a review</h4>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="write a review"
                      ></textarea>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="website"
                      />
                    </div>
                    <div className="form-group">
                      <Button className="btn-blue btn-lg btn-big">
                        Submit Review
                      </Button>
                    </div>
                  </form>

                  <div className="col-md-6 pl-5 ">
                    <h5>Customer reviews</h5>
                    <div className="d-flex align-items-center mt-3">
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <strong className="ml-3">4.5 out of 5</strong>
                    </div>

                    <br />

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">5 start</span>
                      <div
                        class="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">4 start</span>
                      <div
                        class="progress"
                        style={{ width: "50%", height: "20px" }}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">3 start</span>
                      <div
                        class="progress"
                        style={{ width: "55%", height: "20px" }}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">2 start</span>
                      <div
                        class="progress"
                        style={{ width: "35%", height: "20px" }}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">1 start</span>
                      <div
                        class="progress"
                        style={{ width: "25%", height: "20px" }}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          <br />
          <RelatedProducts title={"RELATED PRODUCTS"}/>
          <RelatedProducts title={"RECENTLY VIEW PRODUCTS"}/>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
