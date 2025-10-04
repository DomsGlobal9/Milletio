import React, { useState } from "react";
import axios from "axios";
import "./Cart.css";

/* ── MOCK DATA  (replace with GET /api/cart later) ── */
import img1 from "../../assets/my_order_pic1.png";
import img2 from "../../assets/my_orders_pic2.png";
import img3 from "../../assets/my_order_pic3.png";

const MOCK_CART = [
  { id: 1, name: "Sesame Date Fusion Nutri Bar", price: 65, img: img1, rating: 4.5, qty: 1 },
  { id: 2, name: "Choco Berry Crunch Nutri Bar", price: 65, img: img2, rating: 4.5, qty: 1 },
  { id: 3, name: "Almond Coffee Bliss Nutri Bar", price: 89, img: img3, rating: 4.5, qty: 1 },
];

// Replace with your TEST Razorpay Key ID (same as in .env file)
const RAZORPAY_KEY_ID = "rzp_test_RPEZriNZHFlMQ9"; // ✅ TEST KEY
// const RAZORPAY_KEY_ID ="rzp_live_RP63WpmWU8dM5w";
const API_URL = "http://localhost:5000/api/payment";

export default function Cart() {
  const [items, setItems] = useState(MOCK_CART);
  const [loading, setLoading] = useState(false);

  /* helpers */
  const updateQty = (id, delta) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );

  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment
  const handlePayment = async () => {
    setLoading(true);

    // Load Razorpay script
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create order on backend
      const { data: orderData } = await axios.post(`${API_URL}/create-order`, {
        amount: total,
        currency: "INR",
        receipt: `receipt_${Date.now()}`
      });

      if (!orderData.success) {
        throw new Error("Failed to create order");
      }

      // Step 2: Initialize Razorpay payment
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Nutri Bar Store",
        description: "Payment for Nutri Bars",
        order_id: orderData.order.id,
        handler: async function (response) {
          // Step 3: Verify payment on backend
          try {
            const { data: verifyData } = await axios.post(
              `${API_URL}/verify-payment`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              }
            );

            if (verifyData.success) {
              alert("Payment Successful! Order ID: " + verifyData.orderId);
              // Clear cart or redirect to success page
              setItems([]);
            } else {
              alert("Payment verification failed!");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        notes: {
          address: "Customer Address"
        },
        theme: {
          color: "#F37254"
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            console.log("Payment cancelled by user");
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
      setLoading(false);

    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="cart">
      <header className="cart__header">Cart</header>

      <div className="cart__total">
        <span>Total value:</span>
        <span className="cart__totalAmt">₹ {total}</span>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h3>Your cart is empty!</h3>
        </div>
      ) : (
        <>
          {items.map((it) => (
            <article key={it.id} className="cartItem">
              <img src={it.img} alt="" className="cartItem__img" />

              <div className="cartItem__info">
                <h4>{it.name}</h4>
                <span className="cartItem__rating">★ {it.rating}</span>
                <span className="cartItem__price">₹{it.price}</span>
              </div>

              <div className="cartItem__qty">
                <button onClick={() => updateQty(it.id, -1)}>−</button>
                <span>{it.qty}</span>
                <button onClick={() => updateQty(it.id, 1)}>＋</button>
              </div>
            </article>
          ))}

          <button 
            className="cart__checkout" 
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>
        </>
      )}
    </main>
  );
}