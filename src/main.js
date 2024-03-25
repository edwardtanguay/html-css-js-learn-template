import { Message } from "./components/Message.js";
import { Nav } from "./components/Nav.js";
import { Outlet } from "./components/Outlet.js";

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Info Site</h1>
<span class="menuIcon"><i class="fa fa-bars" aria-hidden="true"></i></span>

${Nav()}
${Outlet()}
`;

