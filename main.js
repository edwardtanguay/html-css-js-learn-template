import * as site from './site.js';
import * as config from './config.js';
import { AdminPanel } from './components/AdminPanel.js';

const appElem = document.querySelector('#app');
const bodyElem = document.querySelector('body');
const characterElem = document.querySelector('.character');
const btnReloadElem = document.querySelector('.reload');

bodyElem.style.backgroundColor = config.siteBackgroundColor();

appElem.innerHTML += AdminPanel();

btnReloadElem.addEventListener('click', () => {
	site.renderSite(characterElem);
});

site.renderSite(characterElem);

