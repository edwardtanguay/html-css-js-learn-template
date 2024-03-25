import { Header } from "./components/Header.js";
import { Nav } from "./components/Nav.js";
import { Outlet } from "./components/Outlet.js";

document.querySelector('#app').innerHTML = /*html*/ `

${Header()}
${Nav()}
${Outlet()}
`;

