import React from 'react';
import ProductCard from './ProductCard';

const dummyProducts = [
  { title: "Smartphone", price: 15999, image: "https://via.placeholder.com/150" },
  { title: "Laptop", price: 54999, image: "https://via.placeholder.com/150" },
  { title: "Headphones", price: 1999, image: "https://via.placeholder.com/150" },
];

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid">
        {dummyProducts.map((prod, index) => (
          <ProductCard key={index} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default Products;
