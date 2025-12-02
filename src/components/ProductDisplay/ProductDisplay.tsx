import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={200}
        />
      )}

      <h2>{product.name}</h2>

      <p>${product.price.toFixed(2)}</p>

      {showDescription && <p>{product.description}</p>}

      {showStockStatus && (
        <p>{product.inStock ? "In stock" : "Out of stock"}</p>
      )}

      {children}

      {onAddToCart && (
        <button onClick={() => onAddToCart(product.id)}>
          Add to cart
        </button>
      )}
    </div>
  );
};
