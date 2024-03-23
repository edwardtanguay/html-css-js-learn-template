import * as site from './site.js';
import * as config from './config.js';
import { AdminPanel } from './components/AdminPanel.js';

const appElem = document.querySelector('#app');
const bodyElem = document.querySelector('body');
const characterElem = document.querySelector('.character');
const btnReloadElem = document.querySelector('.reload');

// bodyElem.style.backgroundColor = config.siteBackgroundColor();

// appElem.innerHTML += AdminPanel();

// btnReloadElem.addEventListener('click', () => {
// 	site.renderSite(characterElem);
// });

// site.renderSite(characterElem);


// test json

console.log('test json');

const response = await fetch('/data/notes.json');
const notes = await response.json();

appElem.innerHTML = /*html*/ `
<h1>Info Site</h1>
<h2>Notes</h2>
<ul>
${notes.map(note => {
	return /*html*/ `<li>${note}</li>`;
}).join('')}
</ul>
`;

