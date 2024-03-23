export const Nav = () => {

	const onNavigate = (pathname) => {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		// mainElem.innerHTML = routes[pathname];
	}

	setTimeout(() => {
		const navElemLinkElems = document.querySelectorAll("nav a");
		const pageOutputElem = document.querySelector(".pageOutput");

		navElemLinkElems.forEach((linkElem) => {
			linkElem.addEventListener("click", (event) => {
				console.log('clicked');
				// onNavigate(linkElem.getAttribute("href"));
				const pageIdCode = linkElem.getAttribute("href");
				pageOutputElem.innerHTML = 'page: ' + pageIdCode;
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