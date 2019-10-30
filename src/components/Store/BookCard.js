import React from "react";

const BookCard = () => {
  return (
    <div className="col-md-3 col-xs-6 col-sm-6">
      <div className="item-container">
        <img
          src="https://image.shutterstock.com/z/stock-vector-education-book-logo-illustration-logo-knowledge-graduation-logo-vector-logo-1081582406.jpg"
          alt="Book"
          className="rounded item-img"
          height="300"
          width="200"
        />
        <div className="item-details">
          <h5>A Book for everyone</h5>
          <h5 className="float-left">Rs. 999</h5>
          <p className="float-right">5 Star</p>
          <hr />
        </div>
        <div className="cart-btn">
          <button className="btn btn-default">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
