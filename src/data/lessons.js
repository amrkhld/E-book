// src/data/lessons.js

import iceCubeMelt from "../assets/general/ice_cube_melt.gif";
import particleMotion from "../assets/general/particle_motion.gif";
import heatingWater from "../assets/videos/heating_water.mp4";
import lightEnergy from "../assets/general/light_energy.gif"
import outro1 from "../assets/general/outro1.gif"
import meltingPoint from "../assets/videos/melting_point.mp4"
import freezingPoint from "../assets/general/freezing_point.gif"
import evaporation from "../assets/general/evaporation.gif"
import condensation from "../assets/general/condensation.mp4"
import statesIcecream from "../assets/general/states_icecream.png"
import outro2 from "../assets/general/outro2.gif"
import mixturesAndSolutions from "../assets/videos/mixtures_and_solutions.mp4"
import smEvaporation from "../assets/videos/separating_mixtures_evaporation.mp4"
import smFiltration from "../assets/videos/separating_mixtures_filtration.mp4"
import typesOfMixtures from "../assets/general/types_of_mixtures.jpg"
import mixturesProperties from "../assets/general/mixtures_properties.jpg"
import waterCompound from "../assets/general/water_compound.gif"
import chemicalChanges from "../assets/videos/chemical_changes.mp4"
import totalMass from "../assets/general/total_mass.png"
import saline from "../assets/general/saline.gif"
import outro3 from "../assets/general/outro3.gif"
import physicalChanges from "../assets/general/physical_changes.jpg"
import tearingPaper from "../assets/general/tearing_paper.gif"
import iceFloat from "../assets/general/ice_floats.gif"
import chemicalChanges2 from "../assets/general/chemical_changes.jpg"
import chemicalReaction from "../assets/general/chemical_reaction.gif"
import rust from "../assets/general/rust.jpg"
import woodBurn from "../assets/general/wood_burn.gif"
import vinegarSoda from "../assets/videos/chemcial_change_evidence.mp4"
import digestion from "../assets/videos/digestion.mp4"
import outro4 from "../assets/general/outro4.gif"
import desalination from "../assets/general/desalination.gif"
import waterFiltration from "../assets/general/water_filtration.png"
import waterEvaporation from "../assets/general/water_evaporation.png"
import waterCondensation from "../assets/general/water_condensation.png"
import saltBrine from "../assets/general/salt_brine.png"
import desalinationProblems from "../assets/general/desalination_problems.png"
import dehydration from "../assets/general/dehydration.gif"
import outro5 from "../assets/general/outro5.gif"
// game
import gameWater from "../assets/general/game_water.gif"
import gameIceCube from "../assets/general/game_ice_cube.jpg"
import gameWax from "../assets/general/game_wax.png"
import gameChoco from "../assets/general/game_choco.png"
import chocolateLiquid from "../assets/general/chocolate_syrup.gif"
import oil from "../assets/general/oil.gif"
import smoke from "../assets/general/smoke.gif"
import salineGame from "../assets/general/saline.jpg"
import sandWater from "../assets/general/sand_water.jpg"
import nutsMix from "../assets/general/nuts_mix.jpg"
import air from "../assets/general/air.jpg"
import rustGame from "../assets/general/rust_game.jpg"
import iceMelting from "../assets/general/ice_melting.gif"
import cuttingPaper from "../assets/general/cutting_paper.gif"
import waterFreezing from "../assets/general/freezing_water.gif"
import makingSalad from "../assets/general/making_salad.gif"
import rusting from "../assets/general/rusting.gif"
import burning from "../assets/general/burning.gif"
import seaweed from "../assets/general/seaweed.webp"
import shells from "../assets/general/shells.jpg"
import fish from "../assets/general/fish.webp"
import salt from "../assets/general/salt.jpg"
import waterCondensationGame from "../assets/general/waterCondensation.png"
import waterVapor from "../assets/general/waterVapor.png"

const lessons = {

  meltingMatter: {
    1: {
      lessonNumber: 1,
      title: "Melting Matter",
      question: "What is Melting?",
      definition:
        "Melting: It is a process in which a matter is changed from solid state to liquid state when heated.",
      note: "Solid matter should be kept below certain temperature to stay in solid state.",
      illustration: iceCubeMelt,
      outro: false
    },

    2: {
      lessonNumber: 1,
      title: "Melting Matter — Thermal Energy",
      question: "What is Thermal Energy?",
      definition:
        "Heat is a form of energy called thermal energy. It makes particles move faster.",
      note: "Thermal energy increases particle motion.",
      illustration: particleMotion,
      outro: false
    },

    3: {
      lessonNumber: 1,
      title: "Melting Matter — Particles in Motion",
      question: "How do particles move?",
      definition:
        "Any matter is made up of very small particles.\nParticles are always in motion.\nHeating makes particles vibrate faster.",
      note: "Particles move faster with heat.",
      illustration: null,
      video: heatingWater,
      outro: false
    },

    4: {
      lessonNumber: 1,
      title: "Melting Matter — Light Energy",
      question: "What is Light Energy?",
      definition:
        "Like thermal energy, light makes particles move, vibrate and spin faster.",
      note: "Sunlight increases particle activity.",
      illustration: lightEnergy,
      outro: false
    },
    5: {
      lessonNumber: null,
      title: null,
      question: null,
      definition:
        null,
      note: null,
      illustration: outro1,
      outro: true,

      game: {
        prompt: "Drag each item to the correct state of matter",
        targets: [
          {
            id: "solid",
            label: "Solid",
            accepts: ["wax", "chocolate", "ice"],
          },
          {
            id: "liquid",
            label: "Liquid",
            accepts: ["water", "oil", "chocolateLiquid"],
          },
        ],
        draggables: [
          {
            id: "water",
            label: "Water",
            image: gameWater,
          },
          {
            id: "wax",
            label: "Wax",
            image: gameWax,
          },
          {
            id: "chocolate",
            label: "Solid Chocolate",
            image: gameChoco,
          },
          {
            id: "ice",
            label: "Ice Cube",
            image: gameIceCube,
          },
          {
            id: "oil",
            label: "Oil",
            image: oil,
          },
          {
            id: "chocolateLiquid",
            label: "Chocolate Syrup",
            image: chocolateLiquid,
          },
        ],
      },
    },
  },


  temperatureAndStatesOfMatter: {
    1: {
      lessonNumber: 2,
      title: "Heat & States of Matter",
      question: "What happens during melting?",
      definition:
        "Melting is the change of matter from a solid state to a liquid state when heat is added.",
      note: "Melting is a physical change. The substance stays the same.",
      illustration: null,
      video: meltingPoint,
      outro: false,
    },

    2: {
      lessonNumber: 2,
      title: "Heat & States of Matter — Freezing",
      question: "What is freezing?",
      definition:
        "Freezing is the change of matter from a liquid state to a solid state when heat is removed.",
      note: "The freezing point of water is 0°C.",
      illustration: freezingPoint,
      outro: false,
    },

    3: {
      lessonNumber: 2,
      title: "Heat & States of Matter — Evaporation",
      question: "What is evaporation?",
      definition:
        "Evaporation is the change of matter from a liquid state to a gas state when particles gain enough energy to escape.",
      note: "Water vapor is invisible.",
      illustration: evaporation,
      outro: false,
    },

    4: {
      lessonNumber: 2,
      title: "Heat & States of Matter — Condensation",
      question: "What is condensation?",
      definition:
        "Condensation is the change of matter from a gas state to a liquid state when particles lose heat.",
      note: "Steam becomes visible when water vapor condenses into tiny droplets.",
      illustration: null,
      video: condensation,
      outro: false,
    },

    5: {
      lessonNumber: 2,
      title: "Heat & States of Matter — Key Facts",
      question: "How does temperature affect states of matter?",
      definition:
        "Matter changes state at specific temperatures.\nWater freezes at 0°C and boils at 100°C.",
      note: "Temperature is measured in degrees Celsius (°C).",
      illustration: statesIcecream,
      outro: false,
    },

    6: {
      lessonNumber: null,
      title: null,
      question: null,
      definition: null,
      note: null,
      illustration: outro2,
      outro: true,
      game: {
        prompt: "Drag each item to its correct state of matter",
        targets: [
          {
            id: "solid",
            label: "Solid",
            accepts: ["ice", "wax", "chocolate"],
          },
          {
            id: "liquid",
            label: "Liquid",
            accepts: ["water", "oil"],
          },
          {
            id: "gas",
            label: "Gas",
            accepts: ["steam"],
          },
        ],
        draggables: [
          {
            id: "water",
            label: "Water",
            image: gameWater,
          },
          {
            id: "ice",
            label: "Ice Cube",
            image: gameIceCube,
          },
          {
            id: "wax",
            label: "Wax",
            image: gameWax,
          },
          {
            id: "chocolate",
            label: "Solid Chocolate",
            image: gameChoco,
          },
          {
            id: "oil",
            label: "Oil",
            image: oil,
          },
          {
            id: "steam",
            label: "Steam",
            image: smoke,
          },
        ],
      },
    },
  },


  mixturesAndCompounds: {
    1: {
      lessonNumber: 3,
      title: "Mixtures & Compounds",
      question: "What is a mixture?",
      definition:
        "A mixture is made of two or more materials that do not combine chemically and do not form a new substance. Each material keeps its own properties.",
      note:
        "Examples include solid + solid, solid + liquid, and gas mixtures.",
      illustration: null,
      video: mixturesAndSolutions,
      outro: false,
    },

    2: {
      lessonNumber: 3,
      title: "Mixtures — Types",
      question: "What types of mixtures exist?",
      definition:
        "Mixtures can be Solid + Solid (like nuts mix), Solid + Liquid (like sand in water) and Gas mixture (like air).",
      note:
        "In all mixtures, materials keep their original properties.",
      illustration: typesOfMixtures,
      outro: false,
    },

    3: {
      lessonNumber: 3,
      title: "Mixtures — Properties",
      question: "What are the properties of mixtures?",
      definition:
        "Mixtures are made of two or more materials.\nThe materials do not chemically combine.\nEach material keeps its properties.\nMixtures can be separated.",
      note:
        "Some mixtures are visible like nuts, while others like air are not.",
      illustration: mixturesProperties,
      outro: false,
    },

    4: {
      lessonNumber: 3,
      title: "Separating Mixtures — Filtration",
      question: "How does filtration separate mixtures?",
      definition:
        "Filtration is a method used to separate solid particles from a liquid by passing the mixture through a filter.",
      note:
        "Filtration separates sand from water. The filter traps solid particles while allowing the liquid to pass through.",
      illustration: null,
      video: smFiltration,
      outro: false,
    },

    5: {
      lessonNumber: 3,
      title: "Separating Mixtures — Evaporation",
      question: "How does evaporation separate mixtures?",
      definition:
        "Evaporation is a method used to separate dissolved substances from a liquid by heating the mixture until the liquid turns into vapor.",
      note:
        "Evaporation separates dissolved salt from water. The water evaporates, leaving the salt behind.",
      illustration: null,
      video: smEvaporation,
      outro: false,
    },

    6: {
      lessonNumber: 3,
      title: "Compounds",
      question: "What is a compound?",
      definition:
        "A compound is formed when two or more materials combine chemically to create a new substance with new properties.",
      note:
        "In compounds, the original properties change completely.",
      illustration: waterCompound,
      outro: false,
    },

    7: {
      lessonNumber: 3,
      title: "Mixing It Up with Mass",
      question: "How does mass behave during mixing and reactions?",
      definition:
        "Mass can be measured before and after mixing or chemical reactions to understand changes.",
      note:
        "In physical mixing, mass stays the same. In chemical reactions, mass depends on whether the system is closed.",
      illustration: null,
      video: chemicalChanges,
      outro: false,
    },

    8: {
      lessonNumber: 3,
      title: "Mass in Mixtures",
      question: "What happens to mass in mixtures?",
      definition:
        "When materials are mixed physically, the total mass before mixing equals the total mass after mixing.",
      note:
        "Examples include water with oil and salt with water.",
      illustration: totalMass,
      outro: false,
    },

    9: {
      lessonNumber: 3,
      title: "Mass in Chemical Reactions",
      question: "What happens to mass in chemical reactions?",
      definition:
        "In chemical reactions, new substances form and properties change. Mass stays the same only if the system is closed.",
      note:
        "If gas escapes, the measured mass decreases.",
      illustration: saline,
      outro: false,
    },

    10: {
      lessonNumber: null,
      title: null,
      question: null,
      definition: null,
      note: null,
      illustration: outro3,
      outro: true,
      game: {
        prompt: "Drag each item to Mixture or Compound.",
        targets: [
          {
            id: "mixture",
            label: "Mixture",
            accepts: ["saltWater", "sandWater", "nutsMix", "air"],
          },
          {
            id: "compound",
            label: "Compound",
            accepts: ["water", "rust"],
          },
        ],
        draggables: [
          {
            id: "water",
            label: "Water (H₂O)",
            image: gameWater,
          },
          {
            id: "saltWater",
            label: "Salt Water",
            image: salineGame,
          },
          {
            id: "sandWater",
            label: "Sand + Water",
            image: sandWater,
          },
          {
            id: "nutsMix",
            label: "Mixed Nuts",
            image: nutsMix,
          },
          {
            id: "air",
            label: "Air",
            image: air,
          },
          {
            id: "rust",
            label: "Rust",
            image: rustGame,
          },
        ],
      },
    },
  },


  physicalAndChemicalChanges: {
    1: {
      lessonNumber: 5,
      title: "Physical Change in Our Lives",
      question: "What is a physical change?",
      definition:
        "A physical change is a change in matter without changing its structure.\nNo new substance is formed.\nOnly size, shape, or state changes.",
      note: "Physical changes do not create new substances.",
      illustration: physicalChanges,
      outro: false,
    },

    2: {
      lessonNumber: 5,
      title: "Physical Change — Everyday Examples",
      question: "What happens when paper is cut or salad is made?",
      definition:
        "Cutting paper changes its size and shape, but it is still paper.\nMaking a salad mixes ingredients, but each ingredient stays the same.",
      note: "Mixing and cutting are physical changes.",
      illustration: tearingPaper,
      outro: false,
    },

    3: {
      lessonNumber: 5,
      title: "Physical Change — Change in State",
      question: "What happens when ice melts or water freezes?",
      definition:
        "Melting changes ice from solid to liquid.\nFreezing changes water from liquid to solid.\nNo new substance is formed.",
      note: "Changes of state are reversible physical changes.",
      illustration: iceFloat,
      outro: false,
    },

    4: {
      lessonNumber: 5,
      title: "Chemical Change — What Is It?",
      question: "What is a chemical change?",
      definition:
        "A chemical change happens when a new substance is formed with new properties.\nThe change cannot be reversed easily.",
      note: "Chemical changes form new substances.",
      illustration: chemicalChanges2,
      outro: false,
    },

    5: {
      lessonNumber: 5,
      title: "Chemical Change — Signs",
      question: "How can we know a chemical change happened?",
      definition:
        "Signs of chemical change include color change, heat, and gas formation.",
      note: "Melting and freezing are NOT chemical changes.",
      illustration: chemicalReaction,
      outro: false,
    },

    6: {
      lessonNumber: 5,
      title: "Chemical Change — Rusting of Iron",
      question: "What happens when iron rusts?",
      definition:
        "When iron reacts with water and oxygen, it forms rust.\nRust is a new substance called iron oxide.",
      note: "Rusting is a chemical change.",
      illustration: rust,
      outro: false,
    },

    7: {
      lessonNumber: 5,
      title: "Chemical Change — Burning",
      question: "What happens when wood burns?",
      definition:
        "Burning happens when wood reacts with oxygen.\nHeat and light are released, and wood turns into ash.",
      note: "Ash has different properties from wood.",
      illustration: woodBurn,
      outro: false,
    },

    8: {
      lessonNumber: 5,
      title: "Chemical Change — Vinegar and Baking Soda",
      question: "What happens when vinegar mixes with baking soda?",
      definition:
        "A chemical reaction occurs and produces gas bubbles.\nThe gas is a new substance.",
      note: "Bubbles are a sign of chemical change.",
      illustration: null,
      video: vinegarSoda,
      outro: false,
    },

    9: {
      lessonNumber: 5,
      title: "Chemical Change — Digestion",
      question: "Why is digestion a chemical change?",
      definition:
        "During digestion, food is broken down into new substances the body can use.",
      note: "Digestion forms new substances.",
      illustration: null,
      video: digestion,
      outro: false,
    },

    10: {
      lessonNumber: null,
      title: null,
      question: null,
      definition: null,
      note: null,
      illustration: outro4,
      outro: true,
      game: {
        prompt: "Drag each change to Physical or Chemical.",
        targets: [
          {
            id: "physical",
            label: "Physical Change",
            accepts: ["meltingIce", "cuttingPaper", "freezingWater", "makingSalad"],
          },
          {
            id: "chemical",
            label: "Chemical Change",
            accepts: ["rusting", "burning"],
          },
        ],
        draggables: [
          {
            id: "meltingIce",
            label: "Ice Melting",
            image: iceMelting,
          },
          {
            id: "cuttingPaper",
            label: "Cutting Paper",
            image: cuttingPaper,
          },
          {
            id: "freezingWater",
            label: "Water Freezing",
            image: waterFreezing,
          },
          {
            id: "makingSalad",
            label: "Making Salad",
            image: makingSalad,
          },
          {
            id: "rusting",
            label: "Iron Rusting",
            image: rusting,
          },
          {
            id: "burning",
            label: "Wood Burning",
            image: burning,
          },
        ],
      },
    },
  },


  desalination: {
    1: {
      lessonNumber: 5,
      title: "Desalination",
      question: "What is desalination?",
      definition:
        "Desalination is the process of removing salts from salt water to make it safe for drinking.",
      note:
        "It changes salt water into fresh water suitable for human use.",
      illustration: desalination,
      outro: false,
    },

    2: {
      lessonNumber: 5,
      title: "Desalination — Filtration",
      question: "What happens during filtration?",
      definition:
        "Filtration removes large materials such as seaweed, shells, and fish from salt water.",
      note:
        "After filtration, water is still undrinkable because salts and minerals remain.",
      illustration: waterFiltration,
      outro: false,
    },

    3: {
      lessonNumber: 5,
      title: "Desalination — Evaporation",
      question: "How does evaporation help desalination?",
      definition:
        "During evaporation, filtered water is boiled. Water vapor rises while salts and minerals are left behind.",
      note:
        "Only water changes into vapor. Salts do not evaporate.",
      illustration: waterEvaporation,
      outro: false,
    },

    4: {
      lessonNumber: 5,
      title: "Desalination — Condensation",
      question: "What is condensation in desalination?",
      definition:
        "Condensation happens when water vapor cools down and turns back into liquid water.",
      note:
        "The condensed water is fresh and safe to drink.",
      illustration: waterCondensation,
      outro: false,
    },

    5: {
      lessonNumber: 5,
      title: "Remaining Salt Water",
      question: "What happens to the remaining salt?",
      definition:
        "After desalination, the remaining water with high salt content is pumped back into the ocean.",
      note:
        "This water is called brine and contains a lot of salt.",
      illustration: saltBrine,
      outro: false,
    },

    6: {
      lessonNumber: 5,
      title: "Problems of Desalination",
      question: "What are the problems of desalination?",
      definition:
        "Desalination needs a lot of energy, is expensive, and can harm marine life.",
      note:
        "Returning very salty water to the ocean can be dangerous for small organisms.",
      illustration: desalinationProblems,
      outro: false,
    },

    7: {
      lessonNumber: 5,
      title: "Drinking Salt Water",
      question: "What happens if humans drink salt water?",
      definition:
        "Drinking salt water causes the body to lose water faster, leading to dehydration and serious health problems.",
      note:
        "Salt water is unsafe for drinking.",
      illustration: dehydration,
      outro: false,
    },

    8: {
      lessonNumber: null,
      title: null,
      question: null,
      definition: null,
      note: null,
      illustration: outro5,
      outro: true,
      game: {
        prompt: "Drag each item to the desalination stage where it is removed or happens.",
        targets: [
          {
            id: "filtration",
            label: "Filtration Stage",
            accepts: ["seaweed", "shells", "fish"],
          },
          {
            id: "evaporation",
            label: "Evaporation Stage",
            accepts: ["salt", "waterVapor"],
          },
          {
            id: "condensation",
            label: "Condensation Stage",
            accepts: ["freshWater"],
          },
        ],
        draggables: [
          {
            id: "seaweed",
            label: "Seaweed",
            image: seaweed,
          },
          {
            id: "shells",
            label: "Shells",
            image: shells,
          },
          {
            id: "fish",
            label: "Fish",
            image: fish,
          },
          {
            id: "salt",
            label: "Salt",
            image: salt,
          },
          {
            id: "waterVapor",
            label: "Water Vapor",
            image: waterVapor,
          },
          {
            id: "freshWater",
            label: "Fresh Water",
            image: waterCondensationGame,
          },
        ],
      },
    },
  },

};

export default lessons;
