// import React, { useRef } from "react";
// import "./hero.css";

// import heroVideo from "../../assets/insta video.mp4"; // ⬅️ replace path/filename if needed
// import heroDesktopVideo from "../../assets/milletio_hero_section_video.mp4"


// const MOBILE_QUERY = "(max-width: 767px)";
// const Hero = () => (
//   const videoRef = useRef(null);

//   // pick the right file on first render
//   const [videoSrc, setVideoSrc] = useState(() =>
//     window.matchMedia(MOBILE_QUERY).matches
//       ? heroVideo
//       : heroDesktopVideo
//   );

//   // listen for viewport changes → swap source
//   useEffect(() => {
//     const mql = window.matchMedia(MOBILE_QUERY);

//     const handler = (e) => {
//       setVideoSrc(e.matches ? heroVideo : heroDesktopVideo);
//     };

//     // modern browsers: addEventListener / fallback for Safari < 14
//     mql.addEventListener ? mql.addEventListener("change", handler)
//                          : mql.addListener(handler);

//     return () => {
//       mql.removeEventListener ? mql.removeEventListener("change", handler)
//                               : mql.removeListener(handler);
//     };
//   }, []);

//   // when source changes, load & play the new file
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();   // re‑evaluate <source> list
//       videoRef.current.play().catch(() => { /* silent fail on iOS */ });
//     }
//   }, [videoSrc]);
//    return (
//  <>
//   <section className="hero">
//     {/* background video */}
//     {/* <video
//       className="hero__video"
//       src={heroVideo}
//       autoPlay
//       muted
//       loop
//       playsInline   // iOS autoplay
//     /> */}
//      <video
//       ref={videoRef}
//       className="hero__video"
//       autoPlay
//       muted
//       loop
//       playsInline
//       key={videoSrc}   
//     >
//       {/*  order matters: browsers pick the *first* matching source */}
//         <source src={heroVideo}  type="video/mp4" media={MOBILE_QUERY} />
//         <source src={heroDesktopVideo} type="video/mp4" media="(min-width: 768px)" />
//       {/* optional: a tiny poster or fallback text */}
//     </video>

//     {/* overlayed content */}
//     <div className="hero__overlay">
//       <button className="hero__cta">Shop&nbsp;Now</button>
//     </div>
//   </section>
//  </>
// );

// export default Hero;


import React, { useEffect, useState, useRef } from "react";
import "./hero.css";

import heroVideoMobile   from "../../assets/insta video.mp4"; // ⬅️ replace path/filename if needed
import heroVideoDesktop from "../../assets/milletio_hero_section_video.mp4"

const MOBILE_QUERY = "(max-width: 767px)";

const Hero = () => {
  /* ✅  DECLARE INSIDE THE COMPONENT — but BEFORE the return() */
  const videoRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(() =>
    window.matchMedia(MOBILE_QUERY).matches
      ? heroVideoMobile
      : heroVideoDesktop
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e) => {
      setVideoSrc(e.matches ? heroVideoMobile : heroVideoDesktop);
    };
    mql.addEventListener ? mql.addEventListener("change", handler)
                         : mql.addListener(handler);

    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", handler)
                              : mql.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  /* ---------- JSX ---------- */
  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        key={videoSrc}
      >
        <source src={heroVideoMobile}  type="video/mp4" media={MOBILE_QUERY} />
        <source src={heroVideoDesktop} type="video/mp4" media="(min-width: 768px)" />
      </video>

      <div className="hero__overlay">
        <button className="hero__cta">Shop&nbsp;Now</button>
      </div>
    </section>
  );
};

export default Hero;
