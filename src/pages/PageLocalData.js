import * as appData from '../appData.js';
import { Employees } from '../components/Employees.js';
import { Loading } from '../components/Loading.js';

export const PageLocalData = () => {

	setTimeout(async () => {
		const contentElem = document.querySelector('.pageLocalData .content');
		const employees = await appData.getEmployees();

		contentElem.innerHTML = Employees(employees);

	}, 0);

	return /*html*/ `
	<section class="page pageLocalData">
		<p>This page loads data asynchronously from a local JSON file via fetch.</p>
		<div class="content">
			${Loading()}
		</div>
	</section>
	`;
};