import * as appData from './appData.js';
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
		}, 0);
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
				name: skill.name
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
	return fullJobs;
};