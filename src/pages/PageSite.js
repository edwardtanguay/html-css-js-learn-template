import { AdminPanel } from "../components/AdminPanel.js";

export const PageSite = () => {
	return /*html*/ `
	<p>This is the site page.</p>

${AdminPanel()}
	`;
};