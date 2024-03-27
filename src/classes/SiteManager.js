import * as appData from '../appData.js';
export class SiteManager {
	
	applySiteMode() {
		switch (appData.getSiteMode()) {
			case 'dark':
				this.setDarkMode();
				break;
			case 'light':
				this.setLightMode();
				break;
		}
	}

	setDarkMode() {
		const bodyElem = document.querySelector('body');

		bodyElem.style.backgroundColor = '#555';
	}

	setLightMode() {
		const bodyElem = document.querySelector('body');

		bodyElem.style.backgroundColor = '#ccc';
	}
}