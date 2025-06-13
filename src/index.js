import "./styles.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

displayHome();

homeBtn.addEventListener('click', () => {
    displayHome();
})

menuBtn.addEventListener('click', () => {
    displayMenu();
})

aboutBtn.addEventListener('click', () => {
    displayAbout();
})

