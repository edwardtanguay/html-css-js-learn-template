import { FullJob } from "./FullJob.js";

export const FullJobs = (fullJobs) => {
	return /*html*/ `
	<h2>${fullJobs.length} Jobs</h2>

	<div class="fullJobs">
	${fullJobs.map(fullJob => {
		return /*html*/ `
		${FullJob(fullJob)}
		`;
	}).join('')}
	</div>
	`;
};