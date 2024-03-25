import * as appData from '../appData.js';
import { Loading } from '../components/Loading.js';

export const PageApiData = () => {
	setTimeout(async () => {
		const contentElem = document.querySelector('.pageApiData .content');

		try {
			const fullJobs = await appData.getFullJobs();
			contentElem.innerHTML = `There are ${fullJobs.length} full jobs.`
		}
		catch (e) {
			contentElem.innerHTML = '<div class="errorMessage">' + e.message + '</div>';
		}

	}, 0);

	return /*html*/ `
	<section class="page pageApiData">
		<p>This page loads data asynchronously from a an external API via fetch. Two separate API requests are made (to <b>jobs</b> and <b>skills</b>) which are combined to create a new data source for this page.</p>
		<div class="content">
			${Loading()}
		</div>
	</section>
	`;
}