export const PageHome = () => {
	return /*html*/ `
	<section class="page pageHome">
<p>This site is a template for sites created only with HTML, CSS and JavaScript files.</p>

<div class="content">
<h2>Purpose</h2>
<ul>
	<li>to give you a useful HTML/CSS/JS <b>starter site</b> with many <b>features</b></li>
	<li>to make you aware of the <b>limitations</b> of HTML/CSS/JavaScript sites (sites you can start in the browser or with VSCode's Live Server extension)</li>
	<li>to make clear why as a web developer you should instead learn <b>JavaScript frameworks</b>, e.g. <b>React</b>, <b>Vue</b>, <b>Angular</b> (sites which require Node and which you start with <code>npm run dev</code>)</li>
</ul>

<blockquote>Building sites with this template is a good way to transition your skills from 1990s HTML pages to modern JavaScript frameworks.
<div class="githubLinkArea"><i class="fa fa-github-alt" aria-hidden="true"></i> <a href="https://github.com/edwardtanguay/html-css-js-learn-template" target="_blank">go to GitHub Repository</a></div>
</blockquote>

<h2>Features</h2>
<ul>
	<li>simple <b>Router</b></li>
	<li>nested <b>components</b></li>
	<li>displays data from <b>local JSON files</b></li>
	<li>displays data from <b>third-party APIs</b></li>
	<li>allows user to create/edit/delete data with <b>localStorage CRUD</b></li>
	<li>has central <b>data-loading component</b> (appData)</li>
	<li>allows user to <b>change site layout</b> (dark mode)</li>
	<li><b>responsive</b> design including mobile hambuger menu</li>
	<li><b>Font Awesome</b> icons</li>
	<li>can be easily <b>published to Vercel</b></li>
	<li>has a similar <b>site structure</b> to JavaScript frameworks:
		<img class="siteImage" src="src/images/siteStructure.png"/>
		<img class="siteImage" src="src/images/frameworkStructure.png"/>
	</li>
</ul>

<h2>Limitations</h2>
<ul>
	<li>you <b>cannot install npm packages</b> as you can in JavaScript Frameworks</li>
	<li>not being able to install npm packages means that you <b>cannot use advanced web development tools such as TypeScript, Sass, Tailwind, Zod, testing frameworks, etc.</b> or if you do, they are cumbersome to set up (TypeScript, Sass, testing frameworks) or are officially not recommended for HTML/CSS/JavaScript sites (Tailwind)</li>
	<li>Router has <b>no page bookmarking</b> and <b>no page refreshing</b> support, i.e. the URL does not reflect which page the user is on and so cannot bring the user back to the same page when clicking a bookmark or refreshing the page, and this is not possible since there is no Node server present as there is in JavaScript frameworks</li>
	<li>Router can display <b>no 404 pages</b></li>
	<li>no <b>state variable support</b> which means adding interactivity to the site (with addEventListener) becomes exponentially complex, e.g. dynamic searching, resorting, etc.</li>
	<li>VSCode <b>cannot auto-format HTML</b> in string literals:
		<img class="siteImage" src="src/images/noautoformat.png"/>
	</li>
</ul>

</div>
</section>
	`;
};