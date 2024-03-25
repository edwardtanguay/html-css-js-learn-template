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
		}, 0);
	});
};

export const getJobs = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch('https://edwardtanguay.vercel.app/share/jobs.json');
				const jobs = await response.json();
				if (response.ok) {
					resolve(jobs);
				} else {
					console.log('ERROR', e);
					reject({ message: generalErrorMessage() });
				}
			}
			catch (e) {
				console.log('ERROR', e);
				reject({ message: generalErrorMessage() });
			}
		}, 0);
	});
};

export const getSkills = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
				const skills = await response.json();
				if (response.ok) {
					resolve(skills);
				} else {
					console.log('ERROR', e);
					reject({ message: generalErrorMessage() });
				}
			}
			catch (e) {
				console.log('ERROR', e);
				reject({ message: generalErrorMessage() });
			}
		}, 0);
	});
};