<p align="center">
<img alt="Gatsby" src="src/images/logo.png" width="200" />
</p>
<h1 align="center">
   Matlock Raft Event Gatsby App
</h1>

## 🚀 Quick start

1. **Clone repo.**

   ```sh
   git clone https://github.com/matlock-raft-event/raft-event-app.git
   ```

2. **Start it up.**

   Navigate into the site’s directory and start it up.
   ```sh
   cd raft-event-app
   yarn install
   yarn start
   ```

3. **You're in!**

   The site is now running at http://localhost:8000!


4. **Learn more about Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## ESLint
[ESLint](https://eslint.org) statically analyzes your code to quickly find problems. Many problems ESLint finds can be automatically fixed.


To display lint errors in the console, the linting tool can be run using

```shell
yarn lint
```

To scan the code for linting errors and automatically fix any that can be resolved, run

```shell
yarn lint:fix
```

The ESLint setup extends the recommended rules from [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Overrides and dded
ESLint rules can be found in `.eslintrc`.
Files ignored by ESLint can be found in `.eslintignore`.

## Adding fonts

[Fontsource](https://fontsource.org/fonts) is a project to provide open source fonts from Google Fonts as NPM Packages.
You can decrease your site’s loading time by self-hosting fonts, saving ~300 milliseconds on desktop to 1+ seconds on 3G
connections.

#### This example shows how to install the Montserrat font. If you have a different Google Font you want to use, you can find the corresponding package in NPM or the Fontsource Font Preview Website.

1. Run `yarn add @fontsource/montserrat` to install the necessary package files.
2. Then within **gatsby-browser.js**, import the font package.
   ```js
   import "@fontsource/montserrat" // Defaults to weight 400 with normal variant.
   ```
   If you wish to select a particular weight or style, you may specify it by changing the import path.
   ```js
   import "@fontsource/montserrat/500.css" // Weight 500.
   import "@fontsource/montserrat/900-normal.css" // Select either normal or italic.
   ```
3. Once it’s imported, you can reference the font name in a CSS stylesheet, CSS Module, or CSS-in-JS.
   ```css
   body {
    font-family: "Montserrat", sans-serif;
   }
   ```

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
