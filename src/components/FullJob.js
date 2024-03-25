export const FullJob = (fullJob) => {
	return /*html*/ `
<div class="fullJob">
	<div class="title"><a href="${fullJob.url}" target="_blank">${fullJob.title}</a></div>
	<div class="company">${fullJob.company}</div>
	<div class="publicationDate">${fullJob.publicationDate}</div>
</div>
	`;
};