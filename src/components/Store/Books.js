import React, { Fragment } from "react";

import BookCard from "./BookCard";
import BookSearch from "./BooSearch";

const Books = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <BookSearch />
        </div>
      </div>
      <br />

      <div className="row">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </Fragment>
  );
};

export default Books;
