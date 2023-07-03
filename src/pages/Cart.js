import { useContext } from "react";
import { CartContext } from "..";
import { ProductCard } from "../component/ProductCard";

export function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div>
      <h3>
        {cart.length === 0 && "Cart is empty, why don't you add something"}
      </h3>
      {cart.map((item) => {
        return (
          <div>
            <ProductCard {...item} />
            <h4>Quantity: {item.quantity}</h4>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        );
      })}
      <h3>
        Total :{" "}
        {cart.reduce(
          (acc, currItem) => acc + currItem.quantity * currItem.price,
          0
        )}
      </h3>
    </div>
  );
}
