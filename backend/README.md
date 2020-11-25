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

| **Dependency**           | **Use**                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| cors                     | middleware that can be used to enable CORS                                                                              |
| express                  | Fast, unopinionated, minimalist web framework for node. npm-url  downloads-url  travis-url  appveyor-url  coveralls-url |
| mongoose                 | Mongoose is a MongoDB  object modeling tool designed to work in an asynchronous environment                             |

### Development Dependencies

| **Dependency**         | **Use**                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| env-cmd                | A simple node program for executing commands using an environment from an env file                               |
| jest                   | Complete and ready to set-up JavaScript testing solution                                                         |
| nodemon                | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application |
| supertest              | The motivation with this module is to provide a high-level abstraction for testing HTTP                          |
