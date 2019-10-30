import React from "react";

const BooSearch = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a book"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2">
          Search
        </button>
      </div>
    </div>
  );
};

export default BooSearch;
