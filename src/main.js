import { Header } from "./components/Header.js";
import { Message } from "./components/Message.js";
import { Nav } from "./components/Nav.js";
import { Outlet } from "./components/Outlet.js";

document.querySelector('#app').innerHTML = /*html*/ `

${Header()}
${Nav()}
${Outlet()}
`;

