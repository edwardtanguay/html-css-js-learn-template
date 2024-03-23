/**
 * gets a random index from e.g. 0 to 9 when there are 10 items 
 * 
 * @returns index number e.g. 0 or 5 
 */
export const getRandomIndex = (numberOfItems) => {
	return Math.floor(Math.random() * numberOfItems);
};

export const capitalizeAllLetters = (text) => {
	return text.toUpperCase();
}

// export default capitalizeAllLetters; ///

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}