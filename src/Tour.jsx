import { useState } from "react";

const Tour = ({ id, image, name, info, price, deleteItem }) => {
  const removeIt = (id) => {
    deleteItem(id);
  };
  const newText = info.substring(0, 100);

  const [isTrue, setIstrue] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>

        <p>{isTrue ? info : newText}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => {
            setIstrue((prev) => {
              return !prev;
            });
          }}
        >
          {isTrue ? "show less" : "read more"}
        </button>
      </div>
      <button
        onClick={() => {
          removeIt(id);
        }}
        className="btn btn-block delete-btn"
      >
        not interested
      </button>
    </article>
  );
};
export default Tour;
