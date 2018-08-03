# A Day For Susana

This is project for the institutional website of the independent documentary *A Day For Susana*.

### Getting Started
⚠️ Make sure you have a recent version of [NodeJs](https://nodejs.org/en/) `^v8.4.0` installed in your computer

 ```bash

# Install the dependencies
$ npm install

# Start a local server with hot reload
$ npm run dev
```

### Running tests
This project uses [Jest](https://facebook.github.io/jest/) and [Vue-test-utils](https://vue-test-utils.vuejs.org/en/) for tests. Refer to their documentation for further details

``` bash
# Run tests from the /test folder and create a coverage report in the end
$ npm run test
```

### Build for production

``` bash
# Build for production with minification
npm run build
```

### File structure
```bash
.
├── dist # auto-generated production files
├── src # Dev source code
│   ├── assets # Images, fonts, videos, etc
│   ├── components # Vue components
│   ├── scss
│   │   ├── base # Global style definitions, like variables, mixins, etc
│   │   └── components # BEM blocks
│   └── store # Vuex store files
└── static # static assets
```
