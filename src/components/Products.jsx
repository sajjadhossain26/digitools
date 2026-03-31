import ProductCard from './ProductCard';

function Products({ products, cart, onBuy }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.some((item) => item.id === product.id)}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}

export default Products;
