import { createContext, useContext, useState } from "react";

export const StateContext = createContext(null);

export const DataShare = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);   // pure in‑memory state
   const [open, setOpen] = useState(false);

  const toggleWishlist = (product) =>
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.filter((p) => p.id !== product.id)   // remove
        : [...prev, product];                       // add
    });

  const value = { wishlist, toggleWishlist,open,setOpen };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// handy hook
export const useWishlist = () => useContext(StateContext);
