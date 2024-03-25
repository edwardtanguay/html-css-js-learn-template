export const Employee = (employee) => {
	return /*html*/ `
<div class="employee">
	<div class="employeeHeader">
		<img src="/src/images/employees/employee_${employee.employeeID}.jpg"/>
		<div class="employeeInfo">
			<div className="innerEmployeeInfo">
				<div class="fullName">${employee.firstName} ${employee.lastName}</div>
				<div class="title">${employee.title}</div>
			</div>
		</div>
	</div>
	<div class="notes">${employee.notes}</div>
</div>
	`;
};