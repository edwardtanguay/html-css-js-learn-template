export const MenuContent = () => {
	return /*html*/ `
	<ul>
		<li>
			<a class="active" href="/">Home</a>
		</li>
		<li>
			<a href="/localdata">Local JSON Data</a>
		</li>
		<li>
			<a href="/apidata">External API Data</a>
		</li>
		<li>
			<a href="/localstorage">Local Storage</a>
		</li>
		<li>
			<a href="/site">Settings</a>
		</li>
	</ul>
	`;
};