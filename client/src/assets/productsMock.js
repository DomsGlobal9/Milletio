// 👉 replace this with an axios/fetch call later
import nutri_choco_one from "../../src/assets/nutri_bar_one.jpg"
import nutty_choco_two from "../../src/assets/nutty_choco_two.jpg"
import sesame_choco_three from "../../src/assets/sesmi_choco_three.jpg"
import almond_choco_four from "../../src/assets/Almond_choco_four.jpg"
export const products = [
  /* ===== Nutri Bar ===== */
  {
    id: 1,
    category: "Nutri Bar",
    title: "Choco Berry Crunch Nutri Bar (50g)",
    desc: "No Refined Sugar | Rich In Protein | Rich In Fiber",
    img: nutri_choco_one,
    price: 65,
  },
  {
    id: 2,
    category: "Nutri Bar",
    title: "Nutty Choco Delight Nutri Bar (50g)",
    desc: "Our Nutty Choco Delight Nutri Bar offers rich chocolate and nutty flavours for energy.",
    img: nutty_choco_two,
    price: 65,
  },
  {
    id: 3,
    category: "Nutri Bar",
    title: "Sesame Date Fusion Nutri Bar (50g)",
    desc: "A wholesome snack fused with sesame seeds and dates for seasonal wellness.",
    img: sesame_choco_three,
    price: 65,
  },
  {
    id: 4,
    category: "Nutri Bar",
    title: "Almond Coffee Bliss Bar (50g)",
    desc: "A decadent bar packed with nutty almond flavour and rich coffee undertones.",
    img: almond_choco_four,
    price: 65,
  },
  /* ===== Dosa Mix ===== */
  {
    id: 5,
    category: "Dosa Mix",
    title: "Classic Millet Dosa Mix (250 g)",
    desc: "Crispy, golden dosas made from a wholesome millet blend in minutes.",
    img: almond_choco_four,
    price: 110,
  },
  {
    id: 6,
    category: "Dosa Mix",
    title: "Spinach & Herb Dosa Mix (250 g)",
    desc: "Green goodness: iron‑rich spinach and herbs for a nutritious breakfast.",
    img: nutty_choco_two,
    price: 120,
  },
  /* ===== Breakfast Mix ===== */
  {
    id: 7,
    category: "Breakfast Mix",
    title: "Berry Millet Porridge Mix (200 g)",
    desc: "Instant porridge bursting with berry flavour and millet nutrition.",
    img: nutri_choco_one,
    price: 95,
  },
  /* ===== Pancake Mix ===== */
  {
    id: 8,
    category: "Pancake Mix",
    title: "Chocolate Chip Millet Pancake Mix (300 g)",
    desc: "Fluffy pancakes studded with chocolate chips – just add milk or water!",
    img: nutty_choco_two,
    price: 130,
  },
];
