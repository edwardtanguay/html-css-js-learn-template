import { PageHome } from "../pages/PageHome.js";

export const PageOutput = () => {
	const url = window.location.pathname;
	console.log('url', url);

	const url2 = window.location.href;
	console.log('url2', url2);

	return /*html*/ `
		<section class="pageOutput">${PageHome()}</section>
	`;
}