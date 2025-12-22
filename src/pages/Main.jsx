// src/pages/Main.jsx
import { Link } from 'react-router-dom';
import introShape1 from "../assets/shapes/intro_shape1.svg";
import introShape2 from "../assets/shapes/intro_shape2.svg";
import CED from "../assets/logos/CED.png"
import CCIMD from "../assets/logos/CCIMD.png"
import MEG from "../assets/logos/MEG.png"

import "./main.css"

export default function Main() {

    return (
        <div className="intro-wrapper">
            <div className="bg-shape bg-shape--top-left">
                <img src={introShape2} alt="" />
            </div>

            <div className="bg-shape bg-shape--bottom-right">
                <img src={introShape1} alt="" />
            </div>
            <div className="transition-play">
                <div className="students students--bottom-right">
                    <dotlottie-wc
                        src="https://lottie.host/43b2fe91-6360-4062-8d60-d076afbfce5b/0zoFqJ2Edt.lottie"
                        autoplay
                        loop
                    />
                </div>

                <div className="logos">
                    <img src={CED} />
                    <img src={CCIMD} />
                    <img src={MEG} />
                </div>

                <div className="main-container">

                    {/* Title Card */}
                    <div className="title-card">
                        <h1 className="title-text">
                            Science
                        </h1>
                        <h2 className="subtitle-text">(Concept 2.3 states of matter)</h2>


                        <dotlottie-wc
                            src="https://lottie.host/d2976d47-494a-44a9-8354-3230a1b3d986/7t21tPSPLh.lottie"
                            autoplay
                            loop
                            className="title-icon"
                        />
                    </div>

                    {/* Middle Text */}
                    <div className="middle-info">
                        <h2>Grade 5</h2>
                        <h3>Semester 1</h3>
                        <h3>2025–2026</h3>
                    </div>

                    {/* Buttons */}
                    <div className="button-row">
                        <Link to="/members"><button className="btn purple-btn pop">Team Members</button></Link>
                        <Link to="/content"> <button className="btn orange-btn pop">Content</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
