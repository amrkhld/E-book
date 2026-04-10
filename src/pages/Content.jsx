

import BackgroundFrame from "../components/BackgroundFrame"
import shinyCube from "../assets/general/shiny_cube.png"
import TopNavigation from "../components/TopNavigation";

import "./content.css"
import { Link, useNavigate } from "react-router-dom"

export default function Content() {
  const navigate = useNavigate();
  const passedQuizzes = JSON.parse(localStorage.getItem('passed_quizzes') || '[]');

  const isUnlocked = (topic) => {
    if (topic === 'meltingMatter') return true;
    if (topic === 'temperatureAndStatesOfMatter') return passedQuizzes.includes('meltingMatter');
    if (topic === 'mixturesAndCompounds') return passedQuizzes.includes('temperatureAndStatesOfMatter');
    if (topic === 'physicalAndChemicalChanges') return passedQuizzes.includes('mixturesAndCompounds');
    if (topic === 'desalination') return passedQuizzes.includes('physicalAndChemicalChanges');
    return true; // Intro
  };

  const handleNavigation = (e, path, topic) => {
    e.preventDefault();
    if (!isUnlocked(topic)) {
      alert("You need to pass the previous lesson's quiz with at least 3 points to unlock this lesson!");
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <BackgroundFrame />
      <TopNavigation />
      
      <div className="transition-play">

        <dotlottie-wc
          className="scientest--bottom-left"
          src="https://lottie.host/0b894928-99ce-4e2b-abbf-86ea55fb47d5/QbamfN70Re.lottie"
          autoplay
          loop
        />

        <img src={shinyCube} className="shiny-cube--bottom-right" />
        <dotlottie-wc
          src="https://lottie.host/74292920-dfa8-4247-b30f-f19dc2ec786e/YGyYkPjmhL.lottie"
          className="sparkle--bottom-right"
          autoplay
          loop
        />

        <main className="content-container">
          <div className="pill-yellow">Content</div>

          <section className="wrapper-left">
            <div class="concept-row">
              <div class="pill-red">Concept 2.3</div>
              <h1>Comparing changes in matter</h1>
            </div>

            <div className="content">
              <ul className="list" aria-label="topics">
                <li><Link to="/content/intro" className="link-shake"><span className="chev">&lt;</span>Intro</Link></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/content/meltingMatter/1'); }} className="link-shake"><span className="chev">&lt;</span>Melting Matter</a></li>
                <li><a href="#" onClick={(e) => handleNavigation(e, '/content/temperatureAndStatesOfMatter/1', 'temperatureAndStatesOfMatter')} className="link-shake" style={{ color: isUnlocked('temperatureAndStatesOfMatter') ? '' : '#aaa', cursor: isUnlocked('temperatureAndStatesOfMatter') ? 'pointer' : 'not-allowed' }}><span className="chev">&lt;</span>Temperature and states of matter {!isUnlocked('temperatureAndStatesOfMatter') && '🔒'}</a></li>
                <li><a href="#" onClick={(e) => handleNavigation(e, '/content/mixturesAndCompounds/1', 'mixturesAndCompounds')} className="link-shake" style={{ color: isUnlocked('mixturesAndCompounds') ? '' : '#aaa', cursor: isUnlocked('mixturesAndCompounds') ? 'pointer' : 'not-allowed' }}><span className="chev">&lt;</span>Mixtures and compounds {!isUnlocked('mixturesAndCompounds') && '🔒'}</a></li>
                <li><a href="#" onClick={(e) => handleNavigation(e, '/content/physicalAndChemicalChanges/1', 'physicalAndChemicalChanges')} className="link-shake" style={{ color: isUnlocked('physicalAndChemicalChanges') ? '' : '#aaa', cursor: isUnlocked('physicalAndChemicalChanges') ? 'pointer' : 'not-allowed' }}><span className="chev">&lt;</span>Physical and chemical changes in our lives {!isUnlocked('physicalAndChemicalChanges') && '🔒'}</a></li>
                <li><a href="#" onClick={(e) => handleNavigation(e, '/content/desalination/1', 'desalination')} className="link-shake" style={{ color: isUnlocked('desalination') ? '' : '#aaa', cursor: isUnlocked('desalination') ? 'pointer' : 'not-allowed' }}><span className="chev">&lt;</span>Desalination {!isUnlocked('desalination') && '🔒'}</a></li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </>

  )
}
