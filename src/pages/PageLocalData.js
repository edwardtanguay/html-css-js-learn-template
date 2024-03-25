import * as appData from '../appData.js';

export const PageLocalData = () => {

	setTimeout(async () => {
		const testElem = document.querySelector('.pageLocalData .test');
		const notes = await appData.getNotes();

		testElem.innerHTML = `There are ${notes.length} notes.`;

	}, 0);

	return /*html*/ `
	<section class="page pageLocalData">
		<p class="test"><i>Loading...</i></p>
	</section>
	`;
};