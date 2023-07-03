import { ProductCard } from "../component/ProductCard";

export function ProductList({ products }) {
  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <ProductCard {...item} noDetail />
          </div>
        );
      })}
    </div>
  );
}
