import React from "react";

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
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                </table>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center cartItemimgWrapper">
                        <div className="imgWrapper">
                          <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg" alt="" className="w-100" />
                        </div>
                        <div>
                        <h6>Field Roast Chao Cheese Creamy Original</h6>
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
