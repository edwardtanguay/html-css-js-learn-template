import { PageHome } from "../pages/PageHome.js";

export const Outlet = () => {
	return /*html*/ `
		<section class="pageOutlet">${PageHome()}</section>
	`;
}