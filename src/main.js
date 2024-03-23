const response = await fetch('/src/data/notes.json');
const notes = await response.json();

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Info Site</h1>
<h2>Notes</h2>
<ul>
${notes.map(note => {
	return /*html*/ `<li>${note}</li>`;
}).join('')}
</ul>
`;

