export const Message = () => {

	setTimeout(() => {
		const messageElem = document.querySelector('.message');
		messageElem.addEventListener('click', () => {
			messageElem.innerText = 'nnn';
			messageElem.style.color = 'red';
		});
	}, 0);

	return /*html*/ `
		<p class="message">This is a message.</p>
	`;
};