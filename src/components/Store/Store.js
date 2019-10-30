import React from "react";

import Categories from "./Categories";
import Books from "./Books";

const Store = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" style={{ border: "1px solid white" }}>
          <Categories />
        </div>
        <div className="col" style={{ border: "1px solid white" }}>
          <div className="row">
            <div
              className="col text-centerl"
              style={{ border: "1px solid white" }}>
              <br />
              <h2 className="text-center">Book Store</h2>
              <p className="text-center">
                Add your favorite book to the shopping cart or read/listen by
                subscribing.
              </p>
            </div>
          </div>
          <Books />
        </div>
      </div>
    </div>
  );
};

export default Store;
