import { generalErrorMessage } from "./config.js";

export const getEmployees = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch('/src/data/employees.json');
				const employees = await response.json();
				if (response.ok) {
					resolve(employees);
				} else {
					console.log('ERROR', e);
					reject({ message: generalErrorMessage() });
				}
			}
			catch (e) {
				console.log('ERROR', e);
				reject({ message: generalErrorMessage() });
			}
		}, 1000);

	});
};