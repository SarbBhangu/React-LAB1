import type { ProductDisplayProps } from "../../types";

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  const handleAddClick = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

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

      
      {onAddToCart && <button onClick={handleAddClick}>Add to cart</button>}
    </div>
  );
}
