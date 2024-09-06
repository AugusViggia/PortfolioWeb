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
    tech: "React | FontAwsome | Gsap | Redux | Axios | Node.js | Express.js | MercadoPago API | Nodemailer | Firebase | Railway",
  },
  {
    title: "PokedexApp",
    image: pokemongif,
    link: "https://pokemonapp-client-production.up.railway.app/",
    desc: "A Pokedex App",
    summary: "A Pokedex app to search for pokemons",
    tech: "React | HTML | CSS | FontAwsome | Axios | Node.js | Express.js | PostgreSQL | Pokemon API | Railway",
  },
  {
    title: "JavaScript Calculator",
    image: calculatorgif,
    link: "https://java-script-calculator-kappa.vercel.app/",
    desc: "JavaScript Calculator made for freeCodeCamp",
    summary: "A simple calculator app made with React",
    tech: "HTML | CSS | JavaScript | React | Vercel",
  },
  {
    title: "Pomodor Clock",
    image: pomodoroClockgif,
    link: "https://pomodoro-clock-sooty-theta.vercel.app/",
    desc: "Pomodoro Clock made for freeCodeCamp",
    summary: "A pomodoro clock app made with React",
    tech: "JavaScript | CSS | HTML | React | Vercel",
  },
  {
    title: "Sitio Profesional UADE",
    image: sitioProfgif,
    link: "https://augusviggia.github.io/Express-Delivery-UADE/",
    desc: "Professional Site UADE, exercise for the final exam of the web design and development class",
    summary: "A professional site for a delivery company",
    tech: "HTML | CSS | JavaScript | Bootstrap | GitHub Pages",
  },
];

export default portfolioData;
