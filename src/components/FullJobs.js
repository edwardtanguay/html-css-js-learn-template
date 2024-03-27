import { FullJob } from "./FullJob.js";

export const FullJobs = (fullJobs) => {

	return /*html*/ `
	<div class="fullJobs">
	${fullJobs.map(fullJob => {
		return /*html*/ `
		${FullJob(fullJob)}
		`;
	}).join('')}
	</div>
	`;
};