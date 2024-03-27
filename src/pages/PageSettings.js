import { ConstructionSign } from "../components/ConstructionSign.js";
import { Loading } from "../components/Loading.js";

export const PageSettings = () => {

	setTimeout(async () => {
		const contentElem = document.querySelector('.pageSettings .content');

		try {
			contentElem.innerHTML = ConstructionSign();
		}
		catch (e) {
			contentElem.innerHTML = '<div class="errorMessage">' + e.message + '</div>';
		}

	}, 0);

	return /*html*/ `
<section class="page pageSettings">
	<p class="intro">This this is site settings page which demonstrates how to allow the user to change the functionality of the site itself, e.g. setting dark/light mode, setting a mock number of seconds that the data-loading pages should take to load in order to see how the loading spinner looks, and creating a mock error on the data-loading pages to see how error handling works.

	<div class="content">
		${Loading()}
	</div>
</section>
	`;
};