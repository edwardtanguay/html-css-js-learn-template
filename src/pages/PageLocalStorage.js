import { ConstructionSign } from "../components/ConstructionSign.js";

export const PageLocalStorage = () => {
	return /*html*/ `
	<p class="intro">This is a todo app with full CRUD (Create, Read, Update, Delete) functionality, including resorting, searching and reading/writing to localStorage. Since HTML/CSS/JavaScript sites don't have state variables, and since CRUD sites with complex interactivity require some way to manage state, this todo app is based on a OOP class caled TodoManager which contains the state of the app, and has methods to manipulate with CRUD commands and render this state as HTML.
		
	${ConstructionSign()}
	
	</p>
	`;
};