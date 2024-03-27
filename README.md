# html-css-js-learn-template

-   repo: https://github.com/edwardtanguay/html-css-js-learn-template
-   live: https://html-css-js-learn-template.vercel.app

![htmlcssjsdemo](https://github.com/edwardtanguay/html-css-js-learn-template/assets/446574/93bd1564-a828-4d07-846f-e41dc82cca9f)

## setup and start

-   clone locally
-   install VSCode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
-   right-click on `index.html` then **Open with Live Server**

![grafik](https://github.com/edwardtanguay/html-css-js-template/assets/446574/f54205f9-1ad7-4d5f-9ba9-333a8921b05d)

## purpose

-   to give you a useful HTML/CSS/JS **starter site** with many **features**
-   to make you aware of the **limitations** of HTML/CSS/JavaScript sites (sites you can start in the browser or with VSCode's Live Server extension)
-   to make clear why as a web developer you should instead learn **JavaScript frameworks**, e.g. **React, Vue, Angular** (sites which require Node and which you start with **npm run dev**)

## features

-   simple **Router**
-   nested **components**
-   displays data from **local JSON files**
-   displays data from **third-party APIs**
-   allows user to create/edit/delete data with **localStorage CRUD**
-   has central **data-loading component** (appData)
-   allows user to **change site** (e.g. dark mode)
-   **responsive** design including mobile hambuger menu
-   **Font Awesome** icons
-   can be easily **published to Vercel**
-   has a similar **site structure** to **JavaScript frameworks**:

![siteStructure](https://github.com/edwardtanguay/html-css-js-learn-template/assets/446574/98431769-6bb2-40ee-939f-00b0a17d5608)
![frameworkStructure](https://github.com/edwardtanguay/html-css-js-learn-template/assets/446574/524fdd89-a85f-4f7e-ad3f-7c43877e79ff)

## limitations

-   you **cannot install npm packages** as you can in JavaScript Frameworks
-   not being able to install npm packages means that you **cannot use advanced web development tools such as TypeScript, Sass, Tailwind, Zod, testing frameworks, etc.** or if you do, they are cumbersome to set up (TypeScript, Sass, testing frameworks) or are officially not recommended for HTML/CSS/JavaScript sites (Tailwind)
-   Router has **no page bookmarking** and **no page refreshing** support, i.e. the URL does not reflect which page the user is on and so cannot bring the user back to the same page when clicking a bookmark or refreshing the page, and this is not possible since there is no Node server present as there is in JavaScript frameworks
-   Router can display **no 404 pages**
-   no **state variable support** which means adding interactivity to the site (with addEventListener) becomes exponentially complex, e.g. dynamic searching, resorting, etc.
-   VSCode **cannot auto-format HTML** in string literals

## learn JavaScript frameworks

- while being able to create a website with vanilla HTML, CSS, and JavaScript is a useful skill, learning JavaScript frameworks is even a more useful skill since they have more features and none of the limitations listed above:

-   [React](https://react.dev) / [Next.js](https://nextjs.org)
-   [Vue](https://vuejs.org) / [Nuxt](https://nuxt.com)
-   [Svelte](https://svelte.dev) / [SvelteKit](https://kit.svelte.dev)
-   [Angular](https://angular.io)
-   [Solid](https://www.solidjs.com)
-   [Remix](https://remix.run)
-   [Astro](https://astro.build)
-   [Qwik](https://qwik.builder.io)

## Edward's tech starters

This HTML-CSS-JavaScript template is part of [Edward's tech starters](https://tanguay-eu.vercel.app/starters) project.

![grafik](https://github.com/edwardtanguay/html-css-js-learn-template/assets/446574/400e2670-afb0-4529-8d54-02497cb32666)
