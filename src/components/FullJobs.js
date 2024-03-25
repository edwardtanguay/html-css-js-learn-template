import { FullJob } from "./FullJob.js";
import * as config from '../config.js';

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