import React from "react";

const Cart = () => {
  return (
    <div className="Container">
      <br />
      <br />
      <div className="row">
        <div className="col-12">
          <h2>Your shopping cart</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-8">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-2 col-md-1 col-lg-1">
                  <img
                    src="https://image.shutterstock.com/z/stock-vector-education-book-logo-illustration-logo-knowledge-graduation-logo-vector-logo-1081582406.jpg"
                    alt="Book"
                    className="rounded"
                    height="100"
                    width="100"
                  />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-9">
                  <h5>A book of life</h5>
                  <small>By adam levine</small>
                  <p>A short description</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">Order summary</div>
      </div>
    </div>
  );
};

export default Cart;
