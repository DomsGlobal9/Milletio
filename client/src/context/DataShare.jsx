

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { auth } from "../firebaseClient";
import { onAuthStateChanged } from "firebase/auth";

export const StateContext = createContext(null);

export const DataShare = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [open, setOpen] = useState(false);
  
  // ✅ NEW: User state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is logged in
        const userData = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          phone: firebaseUser.phoneNumber || "",
          avatar: firebaseUser.photoURL || "",
          dob: "" // Will be set when user fills profile
        };
        setUser(userData);
        
        // Get additional profile data from your backend/localStorage if exists
        const savedProfile = localStorage.getItem(`profile_${firebaseUser.uid}`);
        if (savedProfile) {
          setUser({ ...userData, ...JSON.parse(savedProfile) });
        }
      } else {
        // User is logged out
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Update user profile
  const updateUserProfile = (updatedData) => {
    const newUserData = { ...user, ...updatedData };
    setUser(newUserData);
    
    // Save to localStorage (later replace with backend API)
    if (user?.uid) {
      localStorage.setItem(`profile_${user.uid}`, JSON.stringify({
        name: newUserData.name,
        dob: newUserData.dob,
        phone: newUserData.phone,
        avatar: newUserData.avatar
      }));
    }
  };

  // ✅ Logout function
  const logout = async () => {
    await auth.signOut();
    Cookies.remove("token");
    setUser(null);
  };

  const toggleWishlist = (product) =>
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });

  const value = {
    wishlist,
    toggleWishlist,
    open,
    setOpen,
    user,
    updateUserProfile,
    logout,
    loading
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useWishlist = () => useContext(StateContext);
export const useAuth = () => {
  const context = useContext(StateContext);
  return {
    user: context.user,
    updateUserProfile: context.updateUserProfile,
    logout: context.logout,
    loading: context.loading
  };
};

// import { createContext, useContext, useState } from "react";

// export const StateContext = createContext(null);

// export const DataShare = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);   // pure in‑memory state
//    const [open, setOpen] = useState(false);

//   const toggleWishlist = (product) =>
//     setWishlist((prev) => {
//       const exists = prev.find((p) => p.id === product.id);
//       return exists
//         ? prev.filter((p) => p.id !== product.id)   // remove
//         : [...prev, product];                       // add
//     });

//   const value = { wishlist, toggleWishlist,open,setOpen };
//   return (
//     <StateContext.Provider value={value}>{children}</StateContext.Provider>
//   );
// };

// // handy hook
// export const useWishlist = () => useContext(StateContext);
