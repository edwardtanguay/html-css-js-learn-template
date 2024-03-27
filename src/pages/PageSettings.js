import * as appData from '../appData.js';
import { SiteManager } from '../classes/SiteManager.js';

export const PageSettings = () => {
	const siteMode = appData.getSiteMode();
	const siteManager = new SiteManager();

	setTimeout(async () => {
		const siteModeSelectorElem = document.querySelector('.siteModeSelector');
		siteModeSelectorElem.addEventListener('change', (e) => {
			appData.setSiteMode(e.target.value);
			siteManager.applySiteMode();
		});
	}, 0);

	return /*html*/ `
<section class="page pageSettings">
	<p class="intro">This this is site settings page which demonstrates how to allow the user to change the functionality of the site itself, e.g. setting dark/light mode, setting a mock number of seconds that the data-loading pages should take to load in order to see how the loading spinner looks, and creating a mock error on the data-loading pages to see how error handling works.</p>

	<form class="siteSettings">
		<select class="siteModeSelector">
			<option value="dark" ${siteMode === 'dark' ? 'selected' : ''}>dark mode</option>
			<option value="light" ${siteMode === 'light' ? 'selected' : ''}>light Mode</option>
		</select>
	</form>
</section>
	`;
};