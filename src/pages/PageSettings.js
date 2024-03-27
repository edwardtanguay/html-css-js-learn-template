import * as appData from '../appData.js';
import { SiteManager } from '../classes/SiteManager.js';

export const PageSettings = () => {
	const siteMode = appData.getSiteMode();
	const mockWaitSeconds = appData.getMockWaitSeconds();
	const simulateErrors = appData.getSimulateErrors();
	console.log(simulateErrors);
	const siteManager = new SiteManager();

	setTimeout(async () => {
		const siteModeSelectorElem = document.querySelector('.siteModeSelector');
		const mockWaitSecondsSelector = document.querySelector('.mockWaitSecondsSelector');
		const simulateErrorsSelector = document.querySelector('.simulateErrorsSelector');

		siteModeSelectorElem.addEventListener('change', (e) => {
			appData.setSiteMode(e.target.value);
			siteManager.applySiteMode();
		});

		mockWaitSecondsSelector.addEventListener('change', (e) => {
			appData.setMockWaitSeconds(Number(e.target.value));
		});

		simulateErrorsSelector.addEventListener('change', (e) => {
			appData.setSimulateErrors(e.target.value);
		});
	}, 0);

	return /*html*/ `
<section class="page pageSettings">
	<p class="intro">This this is site settings page which demonstrates how to allow the user to change the functionality of the site itself, e.g. setting dark/light mode, setting a mock number of seconds that the data-loading pages should take to load in order to see how the loading spinner looks, and creating a mock error on the data-loading pages to see how error handling works.</p>

	<form class="siteSettings">

		<div class="area siteModeArea">
			<b>Display:</b> 
			<select class="siteModeSelector">
				<option value="dark" ${siteMode === 'dark' ? 'selected' : ''}>dark mode</option>
				<option value="light" ${siteMode === 'light' ? 'selected' : ''}>light Mode</option>
			</select>
		</div>

		<div class="area mockWaitArea">
			<b>Mock wait:</b> 
			<select class="mockWaitSecondsSelector">
				<option value="0" ${mockWaitSeconds === 0 ? 'selected' : ''}>none</option>
				<option value="1" ${mockWaitSeconds === 1 ? 'selected' : ''}>1 second</option>
				<option value="3" ${mockWaitSeconds === 3 ? 'selected' : ''}>3 seconds</option>
				<option value="5" ${mockWaitSeconds === 5 ? 'selected' : ''}>5 seconds</option>
			</select>
			<div class="info"><i>This allows you to see how the pages with API calls ("Local JSON Data" and "External API Data") work when loading time is longer.</i></div>
		</div>

		<div class="area simulateErrorsArea">
			<b>Simulate Errors:</b> 
			<select class="simulateErrorsSelector">
				<option value="yes" ${simulateErrors === 'yes' ? 'selected' : ''}>yes</option>
				<option value="no" ${simulateErrors === 'no' ? 'selected' : ''}>no</option>
			</select>
			<div class="info"><i>This will randomly (50% of the time) produce a data-loading error in the pages with API calls ("Local JSON Data" and "External API Data") so you can see how errors are handled.</i></div>
		</div>
	</form>
</section>
	`;
};