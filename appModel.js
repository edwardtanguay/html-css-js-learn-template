import { generalErrorMessage } from "./config.js";

export const getCharacters = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch('https://rickandmortyapi.com/api/character');
				const data = await response.json();
				const characters = data.results;
				if (response.ok) {
				// if (response.status === 200) {
					resolve(characters);
				} else {
					console.log('ERROR', e);
					reject({ message: generalErrorMessage() });
				}
			}
			catch (e) {
				console.log('ERROR', e);
				reject({ message: generalErrorMessage() });
			}
		}, 1000);

	});
};