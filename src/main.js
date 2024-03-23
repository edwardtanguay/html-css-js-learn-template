import { AdminPanel } from "./components/AdminPanel.js";
import { Message } from "./components/Message.js";
import { Nav } from "./components/Nav.js";
import { PageOutput } from "./components/PageOutput.js";

const response = await fetch('/src/data/notes.json');
const notes = await response.json();

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Info Site</h1>
${Nav()}
<hr>
${PageOutput()}

<hr>
<h2>Notes</h2>
<ul>
${notes.map(note => {
	return /*html*/ `<li>${note}</li>`;
}).join('')}
</ul>

${Message()}
${AdminPanel()}
`;

