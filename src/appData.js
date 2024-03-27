import * as appData from './appData.js';
import { generalErrorMessage } from "./config.js";
import * as config from './config.js';

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
		}, appData.getMockWaitSeconds() * 1000);
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

export const getFullJobs = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const jobs = await appData.getJobs();
				const skills = await appData.getSkills();
				const fullJobs = convertJobsAndSkillsToFullJobs(jobs, skills);
				resolve(fullJobs);
			}
			catch (e) {
				console.log('ERROR', e);
				reject({ message: generalErrorMessage() });
			}
		}, appData.getMockWaitSeconds() * 1000);
	});
};

const convertSkillListToSkills = (skillList, skills, job) => {
	const skillIdCodes = skillList.split(',').map(m => m.trim());
	const jobSkills = [];
	for (const skillIdCode of skillIdCodes) {
		const skill = skills.find(m => m.idCode === skillIdCode);
		if (skill) {
			const jobSkill = {
				idCode: skillIdCode,
				name: skill.name,
				url: skill.url,
				description: skill.description
			};
			jobSkills.push(jobSkill);
		} else {
			console.log(`BAD SKILL: ${skillIdCode} (${job.company})`);
		}
	}
	return jobSkills;
};

const convertJobsAndSkillsToFullJobs = (jobs, skills) => {
	const fullJobs = [];
	for (const job of jobs) {
		const jobSkills = convertSkillListToSkills(job.skillList, skills, job);
		if (jobSkills) {
			const fullJob = {
				title: job.title,
				company: job.company,
				url: job.url,
				publicationDate: job.publicationDate,
				skills: jobSkills
			};
			fullJobs.push(fullJob);
		}
	}
	fullJobs.sort((a, b) => a.publicationDate < b.publicationDate ? 1 : -1);
	return fullJobs;
};

export const getTodos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const _todos = localStorage.getItem('todos');
				if (_todos) {
					resolve(JSON.parse(_todos));
				} else {
					const response = await fetch('/src/data/todos.json');
					const todos = await response.json();
					if (response.ok) {
						resolve(todos);
					} else {
						console.log('ERROR', e);
						reject({ message: generalErrorMessage() });
					}
				}
			}
			catch (e) {
				console.log('ERROR', e);
				reject({ message: generalErrorMessage() });
			}
		}, 0);
	});
};

export const getSiteMode = () => {
	const _siteMode = localStorage.getItem('siteMode');
	if (_siteMode) {
		return _siteMode;
	} else {
		return config.defaultSiteMode();
	}
};

export const setSiteMode = (siteMode) => {
	localStorage.setItem('siteMode', siteMode);
};

export const getMockWaitSeconds = () => {
	const _mockWaitSeconds = localStorage.getItem('mockWaitSeconds');
	if (_mockWaitSeconds) {
		return Number(_mockWaitSeconds);
	} else {
		return config.defaultMockWaitSeconds();
	}
};

export const setMockWaitSeconds = (mockWaitSeconds) => {
	localStorage.setItem('mockWaitSeconds', mockWaitSeconds);
};

export const getSimulateErrors = () => {
	const _simulateErrors = localStorage.getItem('simulateErrors');
	if (_simulateErrors) {
		return _simulateErrors;
	} else {
		return config.defaultSimulateErrors();
	}
};

export const setSimulateErrors = (simulateErrors) => {
	localStorage.setItem('simulateErrors', simulateErrors);
};