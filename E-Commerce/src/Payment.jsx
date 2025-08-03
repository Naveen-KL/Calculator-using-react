import React from 'react';
import './Payment.css';
function Payment() {
  return (
    <div>
      <h2>Payment</h2>
      <p>Enter payment details here.</p>
      <form className="payment-form">
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Card Holder Name" />
        <input type="text" placeholder="Expiry Date" />
        <input type="text" placeholder="CVV" />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
