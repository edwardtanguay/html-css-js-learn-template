import { PageHome } from '../pages/PageHome.js';
import { PageApiData } from '../pages/PageApiData.js';
import { PageLocalData } from '../pages/PageLocalData.js';
import { PageAbout } from '../pages/PageAbout.js';

export const Nav = () => {
	setTimeout(() => {
		const navElemLinkElems = document.querySelectorAll("nav a");
		const pageOutletElem = document.querySelector(".pageOutlet");

		navElemLinkElems.forEach((linkElem) => {
			linkElem.addEventListener("click", (event) => {
				const pageIdCode = linkElem.getAttribute("href");
				const navMenuElem = document.querySelector(`nav ul li a[href="${pageIdCode}"`);
				navElemLinkElems.forEach((linkElem) => {
					linkElem.classList.remove('active');
				});
				navMenuElem.classList.add('active');
				let html = '';
				switch (pageIdCode) {
					case '/':
						html = PageHome();
						break;
					case '/api-data':
						html = PageApiData();
						break;
					case '/local-data':
						html = PageLocalData();
						break;
					case '/about':
						html = PageAbout();
						break;
				}
				pageOutletElem.innerHTML = html;
				event.preventDefault();
			});
		});
	}, 0);
	return /*html*/ `
<nav>
	<ul>
	<li>
		<a class="active" href="/">Home</a>
	</li>
	<li>
		<a href="/api-data">API Data</a>
	</li>
	<li>
		<a href="/local-data">Local Data</a>
	</li>
	<li>
		<a href="/about">About</a>
	</li>
	</ul>
</nav>
`;
};