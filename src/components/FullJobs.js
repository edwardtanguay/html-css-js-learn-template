import { FullJob } from "./FullJob.js";
import * as config from '../config.js';

export const FullJobs = (fullJobs) => {

	setTimeout(() => {
		const mobileInputElem = document.querySelector('.mobileSearchArea .searchText');
		const computerInputElem = document.querySelector('.computerSearchArea .searchText');

		if (config.getResponsiveStatus() === 'mobile') {
			mobileInputElem.focus();
		} else {
			computerInputElem.focus();
		}
	}, 0);

	return /*html*/ `
	<div class="searchArea computerSearchArea">
		Search <input class="searchText" placeholder="skill" /> in ${fullJobs.length} Jobs
	</div>
	<div class="searchArea mobileSearchArea">
		Search in ${fullJobs.length} Jobs:
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