// src/pages/Members.jsx
import { useRef, useState, useEffect } from "react";
import BackgroundFrame from "../components/BackgroundFrame";
import TopNavigation from "../components/TopNavigation";
import "./members.css";

import mayarPhoto from "../assets/members/Mayar Hossam Eldin.jpeg";
import mennaHamdyPhoto from "../assets/members/Menna Hamdy.jpeg";
import mennaMomenPhoto from "../assets/members/Menna Momen.jpeg";
import mennaSaeedPhoto from "../assets/members/Menna Saeed.jpeg";
import mennaTallahPhoto from "../assets/members/Menna-Tallah Ibrahim.jpeg";
import mernaPhoto from "../assets/members/Merna Elsayed Ageeb.jpeg";
import morenPhoto from "../assets/members/Moren Hany Bekhit.jpeg";

const members = [
  {
    name: "Menna Tallah Ibrahim",
    major: "Science Teacher",
    university: "Ain Shams University",
    role: "Researched information, organized the content, and helped in writing and reviewing the interactive learning material.",
    photo: mennaTallahPhoto,
    accent: "#FF3D00",
    tag: "Content Lead",
  },
  {
    name: "Menna Momen",
    major: "Science Education",
    university: "Ain Shams University",
    role: "Worked as a content designer and contributed to organizing the interactive learning materials, visual design, and layout of the book pages.",
    photo: mennaMomenPhoto,
    accent: "#6934FF",
    tag: "Content & Design",
  },
  {
    name: "Merna Elsayed Ageeb",
    major: "Science Education",
    university: "Ain Shams University",
    role: "Prepared the Chemical Change section — researched the topic, explained key concepts, and designed interactive activities to distinguish chemical from physical changes.",
    photo: mernaPhoto,
    accent: "#263C78",
    tag: "Chemical Change",
  },
  {
    name: "Moren Hany Bekhit",
    major: "Science Education",
    university: "Ain Shams University",
    role: "Worked as a research assistant and content organizer — collecting information, structuring lessons, and improving the learning flow.",
    photo: morenPhoto,
    accent: "#FF3D00",
    tag: "Research & Structure",
  },
  {
    name: "Mayar Hossam Eldin",
    major: "Science Education",
    university: "Ain Shams University",
    role: "Developed and organized the content for the interactive book, researched key concepts, and created activities that make learning more engaging.",
    photo: mayarPhoto,
    accent: "#6934FF",
    tag: "Content & Activities",
  },
  {
    name: "Menna Saeed",
    major: "Science Education",
    university: "Ain Shams University",
    role: "Researched and evaluated AI-powered websites and tools that could be used effectively within the interactive e-book project.",
    photo: mennaSaeedPhoto,
    accent: "#263C78",
    tag: "AI Research",
  },
  {
    name: "Menna Hamdy",
    major: "Science Education",
    university: "Ain Shams University",
    role: "Contributed to designing the interactive pages and improving user experience. Participated in researching information and structuring lesson content.",
    photo: mennaHamdyPhoto,
    accent: "#FF3D00",
    tag: "UX & Design",
  },
];

export default function Members() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // total slides = intro (0) + members (1..7)
  const totalSlides = members.length + 1;
  const currentIndexRef = useRef(0);
  const scrollingRef = useRef(false);

  const goTo = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    currentIndexRef.current = clamped;
    setActiveIndex(clamped);
    container.scrollTo({ top: clamped * container.clientHeight, behavior: "smooth" });
  };

  // Wheel-driven snap with cooldown
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (scrollingRef.current) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = currentIndexRef.current + dir;
      if (next < 0 || next >= totalSlides) return;
      scrollingRef.current = true;
      goTo(next);
      setTimeout(() => { scrollingRef.current = false; }, 900);
    };

    // Keyboard arrow support
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goTo(currentIndexRef.current + 1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goTo(currentIndexRef.current - 1);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BackgroundFrame />
      <TopNavigation />

      {/* Dot nav */}
      <nav className="member-dots" aria-label="Member navigation">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`member-dot${activeIndex === i ? " member-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={i === 0 ? "Intro" : members[i - 1].name}
          />
        ))}
      </nav>

      {/* Snap scroll container */}
      <div className="members-snap-container transition-play" ref={containerRef}>

        {/* ── Intro slide ── */}
        <div className="member-snap-slide member-intro-slide" data-index={0}>
          <div className="pill-yellow members-pill">Team Members</div>
          <h1 className="members-title">
            Meet the <span>Science Team</span>
          </h1>
          <p className="members-subtitle">
            The amazing students who crafted this interactive journey
          </p>
          <button className="members-start-btn" onClick={() => goTo(1)}>
            Meet the Team ↓
          </button>
        </div>

        {/* ── Member slides ── */}
        {members.map((m, i) => (
          <div
            className="member-snap-slide member-slide"
            data-index={i + 1}
            key={i}
          >
            {/* Photo panel */}
            <div className="member-photo-panel" style={{ background: m.accent }}>
              <img src={m.photo} alt={m.name} className="member-slide-photo" />
              <div className="member-photo-overlay" />
            </div>

            {/* Info panel */}
            <div className="member-info-panel">
              <span className="member-tag" style={{ background: m.accent }}>
                {m.tag}
              </span>
              <h2 className="member-slide-name">{m.name}</h2>
              <p className="member-slide-major" style={{ color: m.accent }}>
                {m.major}
              </p>
              <p className="member-slide-university">{m.university}</p>
              <div className="member-divider" style={{ background: m.accent }} />
              <p className="member-slide-role">{m.role}</p>

              {/* counter */}
              <span className="member-counter">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(members.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
