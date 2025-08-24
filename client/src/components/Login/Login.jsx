import React, { useState } from "react";
import "./Login.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { auth, googleProvider } from "../../firebaseClient";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
/* swap these imports for your real asset paths */
import milletioLogo from "../../assets/milletio_logo.png";
import googleLogo from "../../assets/google_icon.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Login() {
  const [phone, setPhone] = useState("");
  const [stayIn, setStayIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken(); // Firebase ID token
      console.log(idToken, "token");
      // To set a token (e.g., after login)
      // Cookies.set("token", idToken, { expires: "1hr" }); // expires in 7 days
      const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
    Cookies.set("token", idToken, { expires: inOneHour });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleOtp = (e) => {
    e.preventDefault();
    if (/^\d{10}$/.test(phone)) {
      setError("");
      // 👉 TODO: trigger OTP flow here
      console.log("Send OTP to", phone);
    } else {
      setError("Enter a valid 10-digit number");
    }
  };

  return (
    <main className="login">
      {/* logo */}
      <img
        src={milletioLogo}
        alt="Milletio – The Global Grain"
        className="login__logo"
      />

      {/* form card */}
      <form className="login__card" onSubmit={handleOtp}>
        <h3 className="login__title">Login</h3>
        <p className="login__subtitle">Please enter your phone number</p>

        {/* phone input */}
        <label className="login__label" htmlFor="phone">
          Phone number
        </label>

        <div className="login__phoneWrap">
          <PhoneInput
            className="ph_input"
            defaultCountry="in"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        {error && <small className="login__error">{error}</small>}

        {/* keep me signed in */}
        <label className="login__keep">
          <input
            type="checkbox"
            checked={stayIn}
            onChange={() => setStayIn(!stayIn)}
          />
          Keep me signed in
        </label>

        {/* OTP button */}
        <button className="login__btn" type="submit">
          Get OTP
        </button>

        {/* divider */}
        <div className="login__divider">
          <span>or sign in with</span>
        </div>

        {/* Google button */}
        <button
          type="button"
          className="login__google"
          onClick={handleGoogleLogin}
        >
          <img src={googleLogo} alt="" />
          Continue with Google
        </button>
      </form>
    </main>
  );
}

// import React, { useState } from "react";
// import axios from "axios";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";

// import "./Login.css";
// import milletioLogo from "../../assets/milletio_logo.png";
// import googleLogo   from "../../assets/google_icon.svg";

// import {
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import { auth, getRecaptcha } from "../../firebaseClient";

// export default function Login() {
//   /* UI state */
//   const [phone, setPhone] = useState("+91");
//   const [code,  setCode]  = useState("");
//   const [step,  setStep]  = useState("phone"); // "phone" | "otp"
//   const [confirm, setConfirm] = useState(null);
//   const [stayIn, setStayIn] = useState(false);
//   const [err,    setErr]    = useState("");

//   /* 1️⃣ send OTP */
//   const requestOTP = async (e) => {
//     e.preventDefault();
//     if (!/^\+\d{8,15}$/.test(phone)) return setErr("Enter a valid phone");

//     try {
//       const verifier = getRecaptcha();
//       const result   = await signInWithPhoneNumber(auth, phone, verifier);
//       setConfirm(result);
//       setStep("otp");
//       setErr("");
//     } catch (e) {
//       setErr(e.message);
//     }
//   };

//   /* 2️⃣ verify OTP & create session */
//   const submitOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const cred  = await confirm.confirm(code);
//       const idTok = await cred.user.getIdToken();

//       /* POST to your Node/Express back‑end */
//       await axios.post("/api/auth/session", { token: idTok, stayIn });

//       // ➜ navigate to dashboard or close modal
//       console.log("Login success");
//     } catch {
//       setErr("Invalid or expired code.");
//     }
//   };

//   return (
//     <main className="login">
//       <img src={milletioLogo} alt="Milletio" className="login__logo" />

//       <form
//         className="login__card"
//         onSubmit={step === "phone" ? requestOTP : submitOTP}
//       >
//         <h3 className="login__title">Login</h3>

//         {step === "phone" && (
//           <>
//             <p className="login__subtitle">Please enter your phone number</p>

//             <label className="login__label">Phone number</label>
//             <div className="login__phoneWrap">
//               <PhoneInput
//                 defaultCountry="in"
//                 value={phone}
//                 onChange={setPhone}
//                 inputClassName="ph_input"
//               />
//             </div>

//             <label className="login__keep">
//               <input
//                 type="checkbox"
//                 checked={stayIn}
//                 onChange={() => setStayIn(!stayIn)}
//               />
//               Keep me signed in
//             </label>

//             <button className="login__btn" type="submit">Get OTP</button>
//           </>
//         )}

//         {step === "otp" && (
//           <>
//             <p className="login__subtitle">Enter the code we sent to {phone}</p>

//             <input
//               className="login__otp"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               maxLength={6}
//               placeholder="6‑digit code"
//             />

//             <button className="login__btn" type="submit">Verify</button>
//           </>
//         )}

//         {/* divider */}
//         {step === "phone" && (
//           <>
//             <div className="login__divider"><span>or sign in with</span></div>
//             <button type="button" className="login__google">
//               <img src={googleLogo} alt="" /> Continue with Google
//             </button>
//           </>
//         )}

//         {err && <small className="login__error">{err}</small>}
//       </form>

//       {/* recaptcha placeholder */}
//       <div id="recaptcha-container"></div>
//     </main>
//   );
// }
