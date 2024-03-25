import { Employee } from "./Employee.js";

export const Employees = (employees) => {
	return /*html*/ `
<h2>Employees</h2>
<div class="employees">
	${employees.map((employee) => {
		return /*html*/ `
			${Employee(employee)}
		`;
	}).join('')}
</div>
	`;
};