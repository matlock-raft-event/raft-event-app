<p align="center">
<img alt="Gatsby" src="src/images/logo.png" width="200" />
</p>
<h1 align="center">
   Matlock Raft Event Gatsby App
</h1>

## 🎨 Storybook

Storybook is deployed on GitHub Pages [here](https://matlock-raft-event.github.io/raft-event-app/).

This is updated every time there is a push to the `main` branch.

## 🚀 Quick start

### Prerequisites

To run this project, you will need to have Node.js and npm installed on your machine. Information on downloading Node.js
and npm can be found here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

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

## ⌨️ Available Scripts

In the project directory, you can run:

### `yarn start`

This command is used to compile the application and launch a development server that serves the application. By
default, the development server will run on http://localhost:8000.

Changes can quickly be seen in the browser without having to rebuild and deploy the application. It watches for code
changes and rebuilds and updates the browser automatically.

### `yarn lint`

Runs the ESLint tool. Analyzes the code and reports any issues according to the rules and configuration defined
in `.eslintrc`.

Code will not be modified, but it will output a list of warnings and errors to the console.

### `yarn lint:fix`

Automatically attempts to fix any issues that can be automatically corrected according to the rules and configuration
defined in `.eslintrc`.

Not all issues can be automatically fixed by ESLint, and some issues may require manual correction. Remaining warnings
and errors will be output to the console.

### `yarn build`

This command is used to perform a production-ready build of the application by compiling the code, optimizing assets,
and creating an output directory that can be deployed to a server. By default, the output directory for the production
build is `public/`.

### `yarn serve`

Serves the production build of the site for testing prior to deployment. Should be run from the project root.

### `yarn typecheck`

Running `tsc` locally will compile the closest project defined by a tsconfig.json, you can compile a set of TypeScript
files by passing in a glob of files you want.

## 📃 Contributing

When contributing to this project, commits should generally follow the specification outlined
in [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

```text
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

Where the type is one of the following:

| Type       | Explanation                                                                                        |
|------------|----------------------------------------------------------------------------------------------------|
| `feat`     | A new feature is being added                                                                       |
| `fix`      | A bug fix is being made                                                                            |
| `docs`     | Documentation is being updated or added                                                            |
| `style`    | Changes that do not affect the code's functionality, such as formatting, missing semi-colons, etc. |
| `refactor` | Code is being refactored without changing its functionality                                        |
| `test`     | New tests or changes to existing tests are being added                                             |
| `chore`    | Changes to build process, package manager, or other maintenance tasks are being made               |
| `perf`     | Performance improvements are being made                                                            |

## ✅ ESLint

[ESLint](https://eslint.org) statically analyzes your code to quickly find problems. Many problems ESLint finds can be
automatically fixed.

To display lint errors in the console, the linting tool can be run using `yarn lint`

To scan the code for linting errors and automatically fix any that can be resolved, run `yarn lint:fix`

The ESLint setup extends the recommended rules
from [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Overrides and added
ESLint rules can be found in `.eslintrc`.
Files ignored by ESLint can be found in `.eslintignore`.

## 🔤 Adding fonts

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
