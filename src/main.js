import { Header } from "./components/Header.js";
import { Nav } from "./components/Nav.js";
import { Outlet } from "./components/Outlet.js";
import * as config from './config.js';

if (window.innerWidth >= 768) {
	config.setResponsiveStatus('computer');
} else {
	config.setResponsiveStatus('mobile');
}

document.querySelector('#app').innerHTML = /*html*/ `
${Header()}
${Nav()}
${Outlet()}
`;

