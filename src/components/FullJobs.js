import { FullJob } from "./FullJob.js";

export const FullJobs = (fullJobs) => {

	setTimeout(() => {
		const inputElem = document.querySelector('.searchText');

		inputElem.focus();
	}, 0);

	return /*html*/ `
	<div class="computerSearchArea">
		Search <input class="searchText" placeholder="skill" /> in ${fullJobs.length} Jobs
	</div>
	<div class="mobileSearchArea">
		Search in ${fullJobs.length} Jobs
		<div>
		<input class="searchText" placeholder="skill" /> 
		</div>
	</div>

	<div class="fullJobs">
	${fullJobs.map(fullJob => {
		return /*html*/ `
		${FullJob(fullJob)}
		`;
	}).join('')}
	</div>
	`;
};