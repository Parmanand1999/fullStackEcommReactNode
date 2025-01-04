import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">Your Cart</h2>
              <p>
                There are <b>3</b> products in your cart{" "}
              </p>

              <div className="table-reponsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                </table>
                <tbody>
                  <tr>
                    <td width="45%">
                 
                      <div className="d-flex align-items-center cartItemimgWrapper">
                        <div className="imgWrapper">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg"
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="info">
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                          <Rating name="read-onlay" value={4.5} readOnly precision={0.5} size="small"/>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
