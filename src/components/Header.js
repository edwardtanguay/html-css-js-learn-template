export const Header = () => {

	window.addEventListener('resize', function () {
		const navMobileElem = document.querySelector('nav.mobile');
		const navComputerElem = document.querySelector('nav.computer');

		if (window.innerWidth >= 768) {
			navMobileElem.style.display = 'none';
			navComputerElem.style.display = 'block';
		}
		if (window.innerWidth < 768) {
			navMobileElem.style.display = 'none';
			navComputerElem.style.display = 'none';
		}
	});


	setTimeout(() => {
		const menuItemElem = document.querySelector('.menuIcon');
		const navMobileElem = document.querySelector('nav.mobile');

		menuItemElem.addEventListener('click', () => {
			const navElemStatus = navMobileElem.style.display;
			navMobileElem.style.display = navElemStatus === 'block' ? 'none' : 'block';
		});
	}, 0);

	return /*html*/ `
<header>
<h1>Info Site</h1>
<span class="menuIcon"><i class="fa fa-bars" aria-hidden="true"></i></span>
</header>
	`;
};