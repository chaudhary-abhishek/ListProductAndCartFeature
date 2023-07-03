import { Link } from "react-router-dom";
export const ProductCard = (item) => {
  const { id, name, price, noDetail } = item;
  return (
    <div
      key={id}
      style={{
        border: "1px solid gray",
        margin: "0.5rem",
        padding: "0.5rem"
      }}
    >
      <h2>
        {name} <small> INR {price} </small>
      </h2>

      {noDetail && <Link to={`/product/${id}`}>Show Detail</Link>}
    </div>
  );
};
