import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyOrders.css";
import timer from "../../assets/pepicons-pencil_rewind-time.svg"
import arrowIcon from "../../assets/arrow_icon.svg";
import MOCK_ORDERS from "../../assets/myorders";   // make sure this file exports an array

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  /* try live API, fall back to mock */
useEffect(() => {
  let cancelled = false;

  (async () => {
    try {
      const { data } = await axios.get(ORDERS_URL, { timeout: 10_000 });

      /* normalise any envelope your back‑end returns */
      const list =
        Array.isArray(data)         ? data :
        Array.isArray(data.orders)  ? data.orders :
        Array.isArray(data.payload) ? data.payload :
        [];

      if (!cancelled) setOrders(list);
    } catch (err) {
      console.warn("Fetch failed – using mock data.", err);
      if (!cancelled) setOrders(MOCK_ORDERS);
    } finally {
      if (!cancelled) setLoading(false);
    }
  })();

  return () => { cancelled = true; };
}, []);


  /* ---------- render ---------- */
  if (loading) return <p className="orders__loading">Loading…</p>;
  if (!orders.length) return <p className="orders__empty">You have no orders yet.</p>;

  return (
    <main className="orders">
      <header className="orders__header">My Orders</header>

      {orders.map((ord) => (
        <article key={ord.id} className="orderCard">
          <h4>Delivered on {ord.delivered}</h4>

          <div className="orderCard__row">
            <div className="orderCard__thumbs">
              {Array.isArray(ord.items) &&
                ord.items.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" />)}
            </div>

            <span className="orderCard__count">+{ord.extraCount} items</span>
            <img src={arrowIcon} alt="" className="orderCard__arrow" />
          </div>

          <div className="orderCard__actions">
            <button className="orderCard__btn reorder"><div><img src={timer} alt="timer" width={20} /></div><div className="sub-reorder">Reorder</div></button>
            <button className="orderCard__btn rate">★ Rate order</button>
          </div>
        </article>
      ))}
    </main>
  );
}
