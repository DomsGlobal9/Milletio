import React from "react";
import "./Model.css";
import { Link } from "react-router-dom";

export default function SignInModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()} // Prevent overlay click from closing when clicking inside modal
      >
        <div className="modal-message">
          <h2>Log in to<br />continue shopping</h2>
        </div>
        <Link to="/login">
        <button className="modal-login-btn" onClick={onClose} >
          Login
        </button>
        </Link>
      </div>
    </div>
  );
}
