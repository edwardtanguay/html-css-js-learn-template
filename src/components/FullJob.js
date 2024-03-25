export const FullJob = (fullJob) => {
	return /*html*/ `
<div class="fullJob">
	<div class="header">
		<div class="title"><a href="${fullJob.url}" target="_blank">${fullJob.title}</a></div>
		<div class="company">${fullJob.company}</div>
		<div class="publicationDate">${fullJob.publicationDate}</div>
	</div>
	<div class="skills">
		<ul>
		${fullJob.skills.map(skill => {
		return /*html*/ `
			<li class="skill"><a href="${skill.url}" target="_blank">${skill.name}</a> - ${skill.description}</li>
			`;
	}).join('')}
		</ul>
	</div>
</div>
	`;
};