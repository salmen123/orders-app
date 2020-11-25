# Starter Kit for [Coding Challenge](https://github.com/salmen123/orders-app/tree/master/frontend) on GitHub

## Get Started

1. **Install [Node](https://nodejs.org)**.
2. **Install [MongoDB](https://www.mongodb.com/)**.
3. **Navigate to this project's root directory on the command line.**
4. **Install Node Packages.** - `npm install`
5. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
6. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**           | **Use**                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| axios                    | Promise based HTTP client for the browser and node.js                                                                           |
| firebase                 | The Firebase Realtime Database lets you store and query user data, and makes it available between users in realtime.            |
| node-sass                | Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass |
| prop-types               | Declare types for props passed into React components                                                                            |
| react                    | React is a JavaScript library for creating user interfaces                                                                      |
| react-dom                | React library for DOM rendering                                                                                                 |
| react-redux              | Connects React components to Redux                                                                                              |
| react-router-dom         | React library for routing                                                                                                       |
| react-scripts            | This package includes scripts and configuration used by Create React App                                                        |
| react-toastify           | React-Toastify allows you to add notifications to your app with ease                                                            |
| redux                    | Library for unidirectional data flows                                                                                           |
| redux-devtools-extension | Wrappers for Redux DevTools Extension                                                                                           |
| redux-logger             | Logger for Redux                                                                                                                |
| redux-thunk              | Async redux library                                                                                                             |
| validator                | This library validates and sanitizes strings only                                                                               |

### Development Dependencies

| **Dependency**         | **Use**                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| babel-eslint           | Lint modern JavaScript via ESLint                                |
| babel-loader           | Add Babel support to Webpack                                     |
| babel-preset-react-app | Babel preset for working in React. Used by create-react-app too. |
| css-loader             | Read CSS files via Webpack                                       |
| eslint                 | Lints JavaScript                                                 |
| eslint-loader          | Run ESLint via Webpack                                           |
| html-webpack-plugin    | Generate HTML file via webpack                                   |
| sass                   | A pure JavaScript implementation of Sass                         |
| sass-loader            | Loads a Sass/SCSS file and compiles it to CSS                         |
| style-loader           | Insert imported CSS into app via Webpack                         |
| webpack                | Bundler with plugin ecosystem and integrated dev server          |
| webpack-cli            | Run Webpack via the command line                                 |
| webpack-dev-server     | Serve app via Webpack                                            |
