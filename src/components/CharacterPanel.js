import * as tools from '../tools.js';

export const CharacterPanel = (characterElem, character) => {
	characterElem.innerHTML = `
		<h1>${tools.capitalizeAllLetters(character.name)}</h1>
		<div>
			<img src="${character.image}"/>
		</div>
	`;
}