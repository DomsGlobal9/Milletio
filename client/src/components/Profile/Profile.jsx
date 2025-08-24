// import React, { useState } from "react";
// import "./Profile.css";

// /*   swap these paths for your real assets   */
// import avatarImg from "../../assets/avatar.jpg";
// import editIcon  from "../../assets/Profile_icon (2).svg";
// import userIcon  from "../../assets/Profile_icon (2).svg";
// import dobIcon   from "../../assets/Dob_icon.svg";
// import phoneIcon from "../../assets/phone_icon.svg";
// import mailIcon  from "../../assets/email_icon.svg";

// const  Profile=()=> {
//   /*  ── local user state (mock) ──  */
//   const [user, setUser] = useState({
//     name:   "Arjun Kumar",
//     dob:    "2001‑05‑24",           // ISO for <input type=date>
//     phone:  "+91 9908088066",
//     email:  "Arjun123@gmail.com"
//   });

//   const [editing, setEditing] = useState(false);
//   const [draft, setDraft]     = useState(user);  // temp edits

//   /* --- handlers --- */
//   const startEdit  = () => { setDraft(user); setEditing(true); };
//   const cancelEdit = () => setEditing(false);
//   const saveEdit   = () => { setUser(draft); setEditing(false); };

//   /* handy update helper for inputs */
//   const update = (key) => (e) =>
//     setDraft({ ...draft, [key]: e.target.value });

//   return (
//     <section className="profile">
//       {/* HEADER */}
//       <header className="profile__header">
//         <h2>Profile</h2>

//         {editing ? (
//           <div className="profile__actions">
//             <button className="btnLink" onClick={saveEdit}>Save</button>
//             <button className="btnLink" onClick={cancelEdit}>Cancel</button>
//           </div>
//         ) : (
//           <button className="profile__edit" onClick={startEdit}>
//             <img src={editIcon} alt="" />
//             <span>Edit</span>
//           </button>
//         )}
//       </header>

//       {/* AVATAR */}
//       <img src={avatarImg} alt="User avatar" className="profile__avatar" />

//       {/* INFO LIST */}
//       <ul className="profile__list">
//         {editing ? (
//           <>
//             <EditField icon={userIcon}  label="Name">
//               <input
//                 type="text"
//                 value={draft.name}
//                 onChange={update("name")}
//               />
//             </EditField>

//             <EditField icon={dobIcon} label="D.O.B">
//               <input
//                 type="date"
//                 value={draft.dob}
//                 onChange={update("dob")}
//               />
//             </EditField>

//             <EditField icon={phoneIcon} label="Phone no.">
//               <input
//                 type="tel"
//                 value={draft.phone}
//                 onChange={update("phone")}
//               />
//             </EditField>

//             <EditField icon={mailIcon} label="E‑Mail">
//               <input
//                 type="email"
//                 value={draft.email}
//                 onChange={update("email")}
//               />
//             </EditField>
//           </>
//         ) : (
//           <>
//             <ViewField icon={userIcon}  label="Name"      value={user.name}  />
//             <ViewField icon={dobIcon}   label="D.O.B"     value={formatDOB(user.dob)} />
//             <ViewField icon={phoneIcon} label="Phone no." value={user.phone} />
//             <ViewField icon={mailIcon}  label="E‑Mail"    value={user.email} />
//           </>
//         )}
//       </ul>
//     </section>
//   );
// }
// export default Profile;
// /* ---------------- helpers ---------------- */

// function ViewField({ icon, label, value }) {
//   return (
//     <li className="profile__item">
//       <img src={icon} alt="" className="profile__icon" />
//       <div>
//         <span className="profile__label">{label}</span>
//         <span className="profile__value">{value}</span>
//       </div>
//     </li>
//   );
// }

// function EditField({ icon, label, children }) {
//   return (
//     <li className="profile__item profile__item--edit">
//       <img src={icon} alt="" className="profile__icon" />
//       <div className="profile__editGroup">
//         <label className="profile__label">{label}</label>
//         {children}
//       </div>
//     </li>
//   );
// }

// /* util to display DOB nicely */
// function formatDOB(iso) {
//   const [y, m, d] = iso.split("-");
//   return `${d}-${m}-${y}`;
// }

/////////////////////////////////////////////////////////////////////
import React, { useState,useRef } from "react";
import "./Profile.css";

/* --------- import your own icons / bitmaps --------- */
// import avatarPlaceholder from "../../assets/profile_avatar.png";   // 120×120 px base
// import addBadgeIcon      from "../../assets/icon_add.png";        // small “+” badge
// import nameIcon          from "../../assets/icon_user.png";
// import calendarIcon      from "../../assets/icon_calendar.png";
// import phoneIcon         from "../../assets/icon_phone.png";
// import emailIcon         from "../../assets/icon_mail.png";

 import avatarImg from "../../assets/Edit_Profile2.svg";
// import editIcon  from "../../assets/Profile_icon (2).svg";
import userIcon  from "../../assets/Profile_icon (2).svg";
import dobIcon   from "../../assets/Dob_icon.svg";
import phoneIcon from "../../assets/phone_icon.svg";
import mailIcon  from "../../assets/email_icon.svg";


export default function Profile() {
     const [avatar, setAvatar] = useState(avatarImg);
  const fileRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved →", form);
  };

  const handleAvatarClick = () => fileRef.current?.click();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    /* preview immediately */
    const url = URL.createObjectURL(file);
    setAvatar(url);

    /* TODO: send `file` to your server here
       then replace `url` with the final CDN / S3 URL
       you get back from the upload response.           */
  };

  return (
    <main className="profile">
      <h1 className="profile__title">Edit profile</h1>

      {/* ---------------- avatar ---------------- */}
          <div className="avatar" onClick={handleAvatarClick}>
          {avatar ? (
          <img src={avatar} alt="avatar" />
        ) : (
          <div style={{borderRadius:"23px",padding:"0",margin:"0"}} />
        )}

        {/* hidden file picker */}
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={handleAvatarChange}
          style={{ display: "none" }}
        />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        {/* ---------- Full name ---------- */}
        <label className="field">
          <span className="field__label">Full Name</span>
          <div className="field__inputWrap">
            <img src={userIcon} alt="" className="field__icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter the Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        {/* ---------- Date of birth ---------- */}
        <label className="field">
          <span className="field__label">Date of Birth</span>
          <div className="field__inputWrap">
            <img src={dobIcon} alt="" className="field__icon" />
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        {/* ---------- Phone ---------- */}
        <label className="field">
          <span className="field__label">Phone Number</span>
          <div className="field__inputWrap">
            <img src={phoneIcon} alt="" className="field__icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter the Phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        {/* ---------- Email ---------- */}
        <label className="field">
          <span className="field__label">Email</span>
          <div className="field__inputWrap">
            <img src={mailIcon} alt="" className="field__icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        {/* ---------- actions ---------- */}
        <div className="actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--primary">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
