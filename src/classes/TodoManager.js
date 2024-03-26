import * as appData from '../appData.js';

export class TodoManager {
	constructor(mainElem) {
		this.mainElem = mainElem;
		this.loadInitialData();
	}

	async loadInitialData() {
		this.todos = await appData.getTodos();
		this.currentlyAddingTodo = false;
		this.render();
	}

	render() {
		this.mainElem.innerHTML = /*html*/ `
<div class="todoApp">
	<div class="header">
		<h3>Todo App</h3>
		<div class="numberOfTodos">There are ${this.todos.length} todos.</div>
	</div>
	${!this.currentlyAddingTodo ? this.renderAddArea() : this.renderAddForm()}
	<div class="todos">
		${this.todos.map(todo => {
			return /*html*/ `
				<div class="todo" >
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

	renderAddArea() {
		setTimeout(() => {
			const btnAddNewTodo = document.querySelector(`.todoApp .btnAddNewTodo`);
			btnAddNewTodo.addEventListener('click', () => {
				this.currentlyAddingTodo = true;
				this.render();
			});
		});
		return /*html*/ `
			<div class="addArea">
				<button class="btnAddNewTodo"><i class="fa fa-plus" aria-hidden="true"></i> Add new todo</button>
			</div>
		`;
	}

	renderAddForm() {
		setTimeout(() => {

		});
		return /*html*/ `
			<form class="addForm">
				<fieldset>
					<legend>Your contact details:</legend>
					<label for="fullName">Name:</label>
					<input type="text"
					name="fullName"
					id="fullName">

					<label for="email">Email:</label>
					<input type="email"
					name="email"
					id="email">

					<label for="phone">Phone:</label>
					<input type="tel"
					name="phone"
					id="phone">
				</fieldset>
				
			</form>
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