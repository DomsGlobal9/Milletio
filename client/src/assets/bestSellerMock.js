// import Almond_img from "../assets/my_order_pic3.png"
// import Sesame_img from "../assets/my_orders_pic2.png"

// export const bestSellers = [
//   {
//     id: 1,
//     name: "Almond Coffee Bliss Nutri Bar",
//     price: 89,
//     rating: 4.5,
//     img: Almond_img, // placeholder – swap with real image
//     bgColor: "#b3916d", // coffee‑brown background
//   },
//   {
//     id: 2,
//     name: "Sesame Date Fusion Nutri Bar",
//     price: 65,
//     rating: 4.5,
//     img: Sesame_img, // placeholder – swap with real image
//     bgColor: "#c9959d", // muted pink background
//   },
// ];

// src/assets/bestSellerMock.js
import Almond_img from "../assets/my_order_pic3.png";
import Sesame_img from "../assets/my_orders_pic2.png";

export const bestSellers = [
  {
    id: 1,
    name: "Nutty Choco Delight Nutri Bar (50g)",
    subtitle: "Packed with oats, walnut, almonds, and Amaranth organic millet.",
    price: 149,
    rating: 4.2,
    ratingCount: 198,
    img: Almond_img,
    bgColor: "#f5d3a2", // orange-beige
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Choco Berry Crunch Nutri Bar (50g)",
    subtitle: "Packed with chia, blueberry, dates, and cocoa chips, organic millet.",
    price: 149,
    rating: 4.2,
    ratingCount: 129,
    img: Sesame_img,
    bgColor: "#cfc1e7", // lavender
    isBestSeller: true,
  },
];
