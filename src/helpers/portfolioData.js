//add project on top for latest
import bakerygif from "../images/projectsicon/bakeryApp.gif";
import pokemongif from "../images/projectsicon/pokedexApp.gif";
import pomodoroClockgif from "../images/projectsicon/pomodoroClock.gif";
import calculatorgif from "../images/projectsicon/javascriptCalc.gif";
import sitioProfgif from "../images/projectsicon/sitioProfesionalUADE.gif";

//add project on top for latest

const portfolioData = [
  {
    title: "BakeryApp",
    image: bakerygif,
    link: "https://bakeryapp-frontend-production.up.railway.app/",
    desc: "Bakery App",
    summary: "An e-commerce app for a bakery shop",
    tech: "React",
  },
  {
    title: "PokedexApp",
    image: pokemongif,
    link: "https://pokemonapp-client-production.up.railway.app/",
    desc: "A Pokedex App",
    summary: "A Pokedex app to search for pokemons",
    tech: "HTML | CSS | React",
  },
  {
    title: "JavaScript Calculator",
    image: calculatorgif,
    link: "https://java-script-calculator-kappa.vercel.app/",
    desc: "JavaScript Calculator made for freeCodeCamp",
    summary: "A simple calculator app",
    tech: "HTML | CSS | JavaScript | React",
  },
  {
    title: "Pomodor Clock",
    image: pomodoroClockgif,
    link: "https://pomodoro-clock-sooty-theta.vercel.app/",
    desc: "Pomodoro Clock made for freeCodeCamp",
    summary: "A pomodoro clock app",
    tech: "JavaScript | CSS | HTML | React",
  },
  {
    title: "Sitio Profesional UADE",
    image: sitioProfgif,
    link: "https://augusviggia.github.io/Express-Delivery-UADE/",
    desc: "Sitio Profesional UADE, ejercitacion para final de materia diseño y desarrollo web",
    summary: "Sitio web de una empresa de delivery",
    tech: "HTML | CSS | JavaScript | Bootstrap",
  }
];

export default portfolioData;
