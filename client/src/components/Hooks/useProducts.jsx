import { useEffect, useState } from "react";
import axios from "axios";

import { PRODUCT_MOCK } from "../../assets/productsMock";   // adjust path if needed

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        /* Replace with real endpoint when ready */
        const { data } = await axios.get("/api/products");

        if (!cancelled) setProducts(data);
      } catch (err) {
        console.error("Product fetch failed, using mock.", err);

        if (!cancelled) {
          setProducts(PRODUCT_MOCK);   // graceful fallback
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return { products, loading, error };
}
