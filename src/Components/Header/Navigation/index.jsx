import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
const Navigation = () => {
  const [isOpenSidebarNav, setisOpenSidebarNav] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-item-center"
                onClick={() => setisOpenSidebarNav(!isOpenSidebarNav)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isOpenSidebarNav === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>men <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu ">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>women <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu ">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                    <Link to="/">
                      <Button>clothing </Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear </Button>
                    </Link>
                    <Link to="/">
                      <Button>watches </Button>
                    </Link>
                  </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>watches <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear </Button>
                    </Link>
                    <Link to="/">
                      <Button>watches </Button>
                    </Link>
                  </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>kids <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                    <Link to="/">
                      <Button>clothing </Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear </Button>
                    </Link>
                    <Link to="/">
                      <Button>watches </Button>
                    </Link>
                  </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>gift <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                    <Link to="/">
                      <Button>clothing <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <Link to="/">
                      <Button>watches <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                  </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>men</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>women</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>gift</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex aline-item-center">
            <ul className="list list-inline ml-auto ">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>men</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>women</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>kids</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Grocery</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
