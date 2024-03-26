export class TodoManager {
	constructor(mainElem) {
		this.mainElem = mainElem;
		this.loadInitialData();
		this.render();
	}

	loadInitialData() {
		this.todos = [111, 222, 333, 444];
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