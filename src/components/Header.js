import * as config from '../config.js';

export const Header = () => {

	window.addEventListener('resize', function () {
		const navElem = document.querySelector('nav');

		if (window.innerWidth >= 768) {
			navElem.style.display = 'block';
			config.setResponsiveStatus('computer');
		}
		if (window.innerWidth < 768) {
			navElem.style.display = 'none';
			config.setResponsiveStatus('mobile');
		}
	});

	setTimeout(() => {
		const menuItemElem = document.querySelector('.menuIcon');
		const navElem = document.querySelector('nav');

		menuItemElem.addEventListener('click', () => {
			const navElemStatus = navElem.style.display;
			navElem.style.display = navElemStatus === 'block' ? 'none' : 'block';
		});
	}, 0);

	return /*html*/ `
<header>
<h1><a href="/">HTML/CSS/JS Site</a></h1>
<span class="menuIcon"><i class="fa fa-bars" aria-hidden="true"></i></span>
</header>
	`;
};