import { AdminPanel } from "./components/AdminPanel.js";
import { Message } from "./components/Message.js";
import { Nav } from "./components/Nav.js";
import { PageOutput } from "./components/PageOutput.js";

const url3 = window.location.href;
console.log('url3', url3);

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

<h2>Image test</h2>
<img src="src/images/test.png"/>

${Message()}
`;

