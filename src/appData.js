import { generalErrorMessage } from "./config.js";

export const getNotes = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch('/src/data/notes.json');
				const notes = await response.json();
				if (response.ok) {
					resolve(notes);
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