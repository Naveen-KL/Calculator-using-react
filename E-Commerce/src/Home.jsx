import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h2>Welcome to <span className="brand">E-Shop</span></h2>
        <p>Shop the best products at unbeatable prices. Fast delivery. Easy returns. Trusted by thousands!</p>
        <Link to="/products" className="shop-button">Start Shopping</Link>
      </section>

      <section className="features">
        <h3>Why Shop With Us?</h3>
        <ul>
          <li>✔️ Free shipping on orders over $50</li>
          <li>✔️ 24/7 Customer support</li>
          <li>✔️ Secure payments and easy checkout</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
