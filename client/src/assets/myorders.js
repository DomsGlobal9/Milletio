/* Dummy images – replace with real assets */
import boxImg1 from "../assets/my_order_pic1.png";
import boxImg2 from "../assets/my_orders_pic2.png";
import boxImg3 from "../assets/my_order_pic3.png";

const MOCK_ORDERS = [
  {
    id: 1,
    delivered: "4 June",
    items: [boxImg1, boxImg2, boxImg3],
    extraCount: 3,
  },
  {
    id: 2,
    delivered: "5 June",
    items: [boxImg2, boxImg1, boxImg3],
    extraCount: 3,
  },
];

export default MOCK_ORDERS;
