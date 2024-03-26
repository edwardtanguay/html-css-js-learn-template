/**
 * gets a random index from e.g. 0 to 9 when there are 10 items 
 */
export const getRandomIndex = (numberOfItems) => {
	return Math.floor(Math.random() * numberOfItems);
};

export const generateSuuid = () => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let shortUUID = "";

	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		shortUUID += characters.charAt(randomIndex);
	}

	return shortUUID;
};