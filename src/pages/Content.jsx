

import BackgroundFrame from "../components/BackgroundFrame"
import shinyCube from "../assets/general/shiny_cube.png"
import TopNavigation from "../components/TopNavigation";

import "./content.css"
import { Link } from "react-router-dom"

export default function Content() {
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

            <div class="content">
              <ul class="list" aria-label="topics">
                <li><Link to="/content/intro" className="link-shake"><span class="chev">&lt;</span>Intro</Link></li>
                <li><Link to="/content/meltingMatter/1" className="link-shake"><span class="chev">&lt;</span>Melting Matter</Link></li>
                <li><Link to="/content/temperatureAndStatesOfMatter/1" className="link-shake"><span class="chev">&lt;</span>Temperature and states of matter</Link></li>
                <li><Link to="/content/mixturesAndCompounds/1" className="link-shake"><span class="chev">&lt;</span>Mixtures and compounds</Link></li>
                <li><Link to="/content/physicalAndChemicalChanges/1" className="link-shake"><span class="chev">&lt;</span>Physical and chemical changes in our lives</Link></li>
                <li><Link to="/content/desalination/1" className="link-shake"><span class="chev">&lt;</span>Desalination</Link></li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </>

  )
}
