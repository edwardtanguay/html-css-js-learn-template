import * as appData from '../appData.js';

export class TodoManager {
	constructor(mainElem) {
		this.mainElem = mainElem;
		this.loadInitialData();
	}

	async loadInitialData() {
		this.todos = await appData.getTodos();
		this.render();
	}

	render() {
		this.mainElem.innerHTML = /*html*/ `
		<div class="todoApp">
			<h3>Todo App</h3>
			<div class="main">There are ${this.todos.length} todos.</div>
			<div class="todos">
				${this.todos.map(todo => {
					return /*html*/ `
					<div class="todo">
						<div class="name">${todo.name}</div>
					</div>
					`
				}).join('')}
			</div>
			<div>
			</div>
		</div>
		`;
	}

	// renderAddButton() {
	// 	setTimeout(() => {
	// 		const btnAddElem = document.querySelector('.todoApp .add');

	// 		btnAddElem.addEventListener('click', () => {
	// 			this.todos.push(999);
	// 			this.render();
	// 		});
	// 	});

	// 	return /*html*/ `
	// 	<button class="add">Add</button>
	// 	`;
	// }

}