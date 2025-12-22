// src/pages/Members.jsx
import BackgroundFrame from "../components/BackgroundFrame";
import TopNavigation from "../components/TopNavigation";
import "./members.css";

const members = [
  "Menna Tallah Ibrahim",
  "Menna Momen",
  "Merna Elsayed",
  "Moren Hany",
  "Mayar Hossam",
  "Menna Tallah Hamdy",
  "Menna Saied Farouk",
];

export default function Members() {
  return (
    <>
      <BackgroundFrame />
      <TopNavigation />

      <main className="members-page transition-play">
        <div className="members-container">
          <div className="pill-yellow members-pill">Team Members</div>

          <h1 className="members-title">
            Meet the <span>Science Team</span>
          </h1>

          <p className="members-subtitle">
            The amazing students who worked on this interactive journey
          </p>

          <section className="members-grid">
            {members.map((name, index) => (
              <div className="member-card" key={index}>
                <div className="member-avatar">
                  {name.charAt(0)}
                </div>
                <h3>{name}</h3>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
