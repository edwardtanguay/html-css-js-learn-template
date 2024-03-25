/**
 * gets a random index from e.g. 0 to 9 when there are 10 items 
 */
export const getRandomIndex = (numberOfItems) => {
	return Math.floor(Math.random() * numberOfItems);
};

