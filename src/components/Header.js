export const Header = () => {

	setTimeout(() => {
		const menuItemElem = document.querySelector('.menuIcon');
		const navElem = document.querySelector('nav');

		menuItemElem.addEventListener('click', () => {
			const navElemStatus = navElem.style.display;
			navElem.style.display = navElemStatus === 'none' ? 'block' : 'none'; 
		});
	}, 0);

	return /*html*/ `
<header>
<h1>Info Site</h1>
<span class="menuIcon"><i class="fa fa-bars" aria-hidden="true"></i></span>
</header>
	`;
};