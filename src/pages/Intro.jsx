import BackgroundFrame from "../components/BackgroundFrame";
import TopNavigation from "../components/TopNavigation";
import threeStates from "../assets/general/three_states.png";
import waterDrops from "../assets/general/water_drops.png";
import "./intro.css";

export default function Intro() {
    return (
        <>
            <BackgroundFrame />
            <TopNavigation />

            <div className="transition-play">

                <dotlottie-wc
                    className="kid-intro"
                    src="https://lottie.host/3738b6e0-ca98-42bd-964f-e3a8f22c5b87/QcNRw5vLUO.lottie"
                    autoplay
                    loop
                />

                <div className="intro water-drops">
                    <img src={waterDrops} />
                </div>

                <div className="img-section">
                    <img src={threeStates} />
                </div>

                <div className="intro text-section">
                    <h1>Welcome to your interactive science journey! <br />
                        <span style={{ color: "#FF3D00" }}>In this unit</span>, you will explore how matter changes.
                    </h1>
                    <p>
                        You will see how heat and energy affect matter, how mixtures and compounds form,
                        and how these ideas help us in real life — from cooking to cleaning water.
                    </p>
                </div>

                <section className="cards-section">
                    <div className="cards-header">
                        <h2>In this unit, you will learn:</h2>
                        <div className="scroll-indicator" aria-hidden="true">
                            <span className="scroll-text">Swipe or drag to explore</span>
                            <span className="scroll-arrow">➜</span>
                        </div>
                    </div>

                    <div className="cards-track">
                        <div className="card">
                            <h2>Melting Matter</h2>
                            <ul>
                                <li>How heat (thermal and light energy) makes particles move faster</li>
                                <li>What melting is and how solids change to liquids</li>
                                <li>Why keeping matter below certain temperatures keeps it solid</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h2>Temperature & States of Matter</h2>
                            <ul>
                                <li>How matter changes between solid, liquid, and gas</li>
                                <li>Melting, freezing, evaporation, and condensation</li>
                                <li>Key temperatures like 0°C (freezing) and 100°C (boiling)</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h2>Mixtures & Compounds</h2>
                            <ul>
                                <li>What mixtures are and how they keep their properties</li>
                                <li>Ways to separate mixtures, such as filtration and evaporation</li>
                                <li>What compounds are and how new substances with new properties form</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h2>Physical & Chemical Changes</h2>
                            <ul>
                                <li>How physical changes affect size, shape, or state without new substances</li>
                                <li>How chemical changes create new substances with new properties</li>
                                <li>Real-life examples like rusting, burning, digestion, and bubbling reactions</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h2>Desalination & Water</h2>
                            <ul>
                                <li>How filtration, evaporation, and condensation make fresh water from salt water</li>
                                <li>What happens to the leftover salty water (brine)</li>
                                <li>Why desalination is useful but also expensive and can affect marine life</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
