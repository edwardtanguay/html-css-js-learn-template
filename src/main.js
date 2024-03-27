import { Header } from "./components/Header.js";
import { Nav } from "./components/Nav.js";
import { Outlet } from "./components/Outlet.js";
import * as config from './config.js';
import { SiteManager } from "./classes/SiteManager.js";

config.determineResponsiveStatus();

const siteManager = new SiteManager();
siteManager.applySiteMode();

document.querySelector('#app').innerHTML = /*html*/ `
	${Header()}
	${Nav()}
	${Outlet()}
`;
