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

	resetAppData() {
		localStorage.removeItem('todos');
		this.loadInitialData();
	}

	render() {
		setTimeout(() => {
			const btnResetAppElem = document.querySelector(`.todoApp .btnResetApp`);

			btnResetAppElem.addEventListener('click', () => {
				this.resetAppData();
			});
		});

		this.todos.sort((a, b) => a.stars < b.stars ? 1 : -1);
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
				${this.renderTodo(todo)}
				`;
		}).join('')}
		<div class="buttonPanel">
			<button type="button" class="btnResetApp">Reset app to default todos</button>
		</div>
	</div>
		`;
	}

	userIsEditingATodo() {
		const numberOfTodosBeingEdited = this.todos.reduce((acc, todo) => {
			if (todo.userIsEditing) {
				return acc + 1;
			} else {
				return acc;
			}
		}, 0);
		return numberOfTodosBeingEdited !== 0;
	}

	renderTodo(todo) {
		if (!todo.userIsEditing) {
			return /*html*/ `
				<div class="todo" >
					<div class="starTitle">
						<div class="itemStarScore">${todo.stars.toFixed(1)}</div>
						${this.renderProgressIcon(todo.inProgress)}
						<div class="title">${todo.title}</div>
					</div>
					<div class="manageIcons">
						${this.renderEditIcon(todo)}
						${this.renderDeleteIcon(todo)}
					</div>
				</div> 
			`;
		} else {
			return /*html*/ `
				<div>editing</div>
			`;
		}
	}

	renderProgressIcon(inProgress) {
		return /*html*/ `
		<i class="fa fa-refresh ${inProgress ? 'progressCurrent' : 'progressStopped'}" aria-hidden="true"></i>
		`;
	}

	renderAddArea() {
		if (!this.userIsEditingATodo()) {
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
		} else {
			return '';
		}
	}

	saveInLocalStorage() {
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	renderAddForm() {
		setTimeout(() => {
			const starsDefault = 3;
			const titleElem = document.querySelector('.todoApp .title');
			const btnCancelElem = document.querySelector('.todoApp .btnCancel');
			const btnAddElem = document.querySelector('.todoApp .btnAdd');
			const sliderElem = document.querySelector('.todoApp .slider');
			const starScoreElem = document.querySelector('.todoApp .starScore');
			const inProgressCheckboxElem = document.querySelector('.todoApp .inProgressCheckbox');
			const formInProgressIconElem = document.querySelector('.todoApp .formInProgressIcon');

			starScoreElem.innerText = String(starsDefault.toFixed(1));
			titleElem.focus();
			formInProgressIconElem.innerHTML = this.renderProgressIcon(false);

			inProgressCheckboxElem.addEventListener('click', () => {
				formInProgressIconElem.innerHTML = this.renderProgressIcon(inProgressCheckboxElem.checked);
			});

			btnCancelElem.addEventListener('click', () => {
				this.currentlyAddingTodo = false;
				this.render();
			});

			sliderElem.addEventListener('change', () => {
				starScoreElem.innerText = Number(sliderElem.value).toFixed(1);
			});

			btnAddElem.addEventListener('click', () => {
				if (titleElem.value.trim() !== '') {
					const newTodo = {
						suuid: tools.generateSuuid(),
						title: titleElem.value,
						stars: Number(sliderElem.value),
						inProgress: inProgressCheckboxElem.checked
					};
					this.todos.push(newTodo);
					this.saveInLocalStorage();
					this.currentlyAddingTodo = false;
					this.render();
				}
			});
		});

		return /*html*/ `
			<form class="addForm">
				<fieldset>
					<legend>New Todo</legend>

					<input type="text" class="title" >

					<div class="extraFields">
						<div class="starsArea">
							<div class="starScore"></div>
							<div class="mobileStars">Stars (1-5)</div>
							<div class="min">Stars: 1</div>
							<input class="slider" type="range" min="1" max="5" value="3" step="0.1">
							<div class="max">5</div>
						</div>
						<div class="inProgressArea">
							<div>
								<input type="checkbox" class="inProgressCheckbox" id="inProgressCheckbox"><label for="inProgressCheckbox" class="inProgressText">In Progress</label>
							</div>
							<div class="formInProgressIcon"></div>
						</div>
					</div>

					<div class="buttonArea">
						<button type="button" class="btnCancel">Cancel</button>
						<button type="button" class="btnAdd">Add</button>
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
				this.saveInLocalStorage();
				this.render();
			});
		});

		return /*html*/ `
			<i class="fa fa-trash-o deleteIcon ${className}" aria-hidden="true"></i>
		`;
	}

	renderEditIcon(todo) {
		if (!this.userIsEditingATodo()) {
			const className = `editIcon-${todo.suuid}`;
			setTimeout(() => {
				const editIconElem = document.querySelector(`.todoApp .${className}`);
				editIconElem.addEventListener('click', () => {
					todo.userIsEditing = true;
					this.render();
				});
			});

			return /*html*/ `
			<i class="fa fa-pencil editIcon ${className}" aria-hidden="true"></i>
		`;
		} else {
			return '';
		}
	}

}