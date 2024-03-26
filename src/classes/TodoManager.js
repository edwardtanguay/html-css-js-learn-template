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
			<div class="header">
				<h3>Todo App</h3>
				<div class="numberOfTodos">There are ${this.todos.length} todos.</div>
			</div>
			<div class="todos">
				${this.todos.map(todo => {
			return /*html*/ `
					<div class="todo">
						<div class="name">${todo.name}</div>
						${this.renderDeleteIcon(todo)}
					</div>
					`;
		}).join('')}
			</div>
			<div>
			</div>
		</div>
		`;
	}

	renderDeleteIcon(todo) {
		const className = `deleteIcon-${todo.suuid}`;
		setTimeout(() => {
			const deleteIconElem = document.querySelector(`.todoApp .${className}`);
			deleteIconElem.addEventListener('click', () => {
				this.todos = this.todos.filter(m => m.suuid !== todo.suuid);
				this.render();
			});
		});

		return /*html*/ `
			<i class="fa fa-trash-o deleteIcon ${className}" aria-hidden="true"></i>
		`;
	}

}