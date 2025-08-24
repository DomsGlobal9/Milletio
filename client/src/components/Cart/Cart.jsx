import React, { useState } from "react";
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

export default function Cart() {
  const [items, setItems] = useState(MOCK_CART);

  /* helpers */
  const updateQty = (id, delta) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );

  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <main className="cart">
      <header className="cart__header">Cart</header>

      <div className="cart__total">
        <span>Total value:</span>
        <span className="cart__totalAmt">₹ {total}</span>
      </div>

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

      <button className="cart__checkout">Proceed to Checkout</button>
    </main>
  );
}
