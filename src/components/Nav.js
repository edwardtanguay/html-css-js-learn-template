import { PageHome } from '../pages/PageHome.js';
import { PageContact } from '../pages/PageContact.js';
import { PageAbout } from '../pages/PageAbout.js';

export const Nav = () => {
	setTimeout(() => {
		const navElemLinkElems = document.querySelectorAll("nav a");
		const pageOutputElem = document.querySelector(".pageOutput");

		navElemLinkElems.forEach((linkElem) => {
			linkElem.addEventListener("click", (event) => {
				console.log('clicked');
				const pageIdCode = linkElem.getAttribute("href");
				let html = '';
				switch (pageIdCode) {
					case '/':
						html = PageHome();
						break;
					case '/contact':
						html = PageContact();
						break;
					case '/about':
						html = PageAbout();
						break;
				}
				pageOutputElem.innerHTML = html;
				event.preventDefault();
			});
		});
	}, 0);
	return /*html*/ `
<nav>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/contact">Contact</a>
  </li>
  <li>
    <a href="/about">About</a>
  </li>
</nav>
`;
};