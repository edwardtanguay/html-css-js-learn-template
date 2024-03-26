import * as appData from '../appData.js';
import * as tools from '../tools.js';

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
					<div class="title">${todo.title}</div>
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
			const titleElem = document.querySelector('.todoApp .title');
			const btnCancelElem = document.querySelector('.todoApp .btnCancel');
			const btnAddElem = document.querySelector('.todoApp .btnAdd');
			titleElem.focus();

			btnCancelElem.addEventListener('click', () => {
				this.currentlyAddingTodo = false;
				this.render();
			});

			btnAddElem.addEventListener('click', () => {
				this.todos.push({
					suuid: tools.generateSuuid(),
					title: 'nnn',
					stars: 3.5,
					inProgress: false
				});
				this.currentlyAddingTodo = false;
				this.render();
			});
		});
		return /*html*/ `
			<form class="addForm">
				<fieldset>
					<legend>New Todo</legend>

					<input type="text" class="title" >

					<div class="extraFields">
						<div class="starsArea">
							<div>Stars: 1</div>
							<input class="slider" type="range" min="1" max="100" value="50">
							<div>5</div>
						</div>
						<div class="inProgressArea">
							<input type="checkbox" class="inProgressCheckbox" id="inProgressCheckbox"> <label for="inProgressCheckbox" class="inProgressText">In Progress</label>
						</div>
					</div>

					<div class="buttonArea">
						<button class="btnCancel">Cancel</button>
						<button class="btnAdd">Add</button>
					</div>

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