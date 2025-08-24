// src/components/Products/ProductThumbnail.jsx
import { Link } from "react-router-dom";

const ProductThumbnail = ({ id, img, title }) => (
  <Link to={`/products/${id}`} className="thumb">
    <img src={img} alt={title} loading="lazy" width={100} height={100} />
  </Link>
);

export default ProductThumbnail;
