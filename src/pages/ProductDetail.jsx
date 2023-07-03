import { Link, useParams } from "react-router-dom";
import { products } from "../data/productsDB";
import { ProductCard } from "../component/ProductCard";
import { useContext } from "react";
import { CartContext } from "..";

export const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { productid } = useParams();

  function getProductById(product, prodid) {
    return product.find(({ id }) => id === prodid);
  }
  const product = getProductById(products, productid);
  // console.log(product)
  return (
    <div>
      <h3>This is Product Detail Page</h3>
      <ProductCard {...product} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button>
        <Link to="/">View All</Link>
      </button>
    </div>
  );
};
