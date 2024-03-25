import { FullJob } from "./FullJob.js";

export const FullJobs = (fullJobs) => {
	return /*html*/ `
	<h2>Full Jobs</h2>

	${fullJobs.map(fullJob => {
		return /*html*/ `
		${FullJob(fullJob)}
		`;
	}).join('')}
	`;
};