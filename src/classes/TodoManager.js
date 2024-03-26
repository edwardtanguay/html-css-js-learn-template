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
			<div>There are ${this.todos.length} todos.</div>
			<div>${this.todos.map(todo => `<span>${todo}</span>`).join(', ')}
			<div>
			${this.renderAddButton()}
			</div>
		</div>
		`;
	}

	renderAddButton() {
		setTimeout(() => {
			const btnAddElem = document.querySelector('.todoApp .add');

			btnAddElem.addEventListener('click', () => {
				this.todos.push(999);
				this.render();
			});
		});

		return /*html*/ `
		<button class="add">Add</button>
		`;
	}
}