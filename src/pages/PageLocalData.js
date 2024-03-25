import * as appData from '../appData.js';
import { Loading } from '../components/Loading.js';

export const PageLocalData = () => {

	setTimeout(async () => {
		const pageElem = document.querySelector('.pageLocalData');
		const employees = await appData.getEmployees();

		pageElem.innerHTML = `There are ${employees.length} employees.`;

	}, 0);

	return /*html*/ `
	<section class="page pageLocalData">
		${Loading()}
	</section>
	`;
};