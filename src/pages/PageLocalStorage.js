import { TodoManager } from "../classes/TodoManager.js";
import { Loading } from "../components/Loading.js";

export const PageLocalStorage = () => {

	setTimeout(async () => {
		const contentElem = document.querySelector('.pageLocalStorage .content');

		try {
			const todoManager = new TodoManager(contentElem);
		}
		catch (e) {
			contentElem.innerHTML = '<div class="errorMessage">' + e.message + '</div>';
		}

	}, 0);

	return /*html*/ `
<section class="page pageLocalStorage">
	<p class="intro">This is a todo app with full CRUD (Create, Read, Update, Delete) functionality, including resorting, searching and reading/writing to localStorage. Since HTML/CSS/JavaScript sites don't have state variables, and since CRUD sites with complex interactivity require some way to manage state, this todo app is based on a OOP class caled TodoManager which contains the state of the app, and has methods to manipulate with CRUD commands and render this state as HTML.
		
	<div class="content">
		${Loading()}
	</div>
	</p>
</section>
	`;
};