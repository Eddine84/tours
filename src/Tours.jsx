import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ data, deleteItem }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {" "}
          {data.map((item, index) => (
            <Tour key={item.id} {...item} deleteItem={deleteItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
