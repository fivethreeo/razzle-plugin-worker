[![npm version](https://badge.fury.io/js/razzle-plugin-worker.svg)](https://badge.fury.io/js/razzle-plugin-worker)

# razzle-plugin-worker
Razzle plugin to load workers using worker-loader.

Usage in Razzle Projects
```sh
yarn add razzle-plugin-worker --dev
```

create a **razzle.config.js** file in root directory of project (next to the *package.json*) and put this content inside it

Using the plugin with the default options
```javascript
// razzle.config.js

module.exports = {
  plugins: ['worker'],
};
```


Usage, any file loaded ending in `.worker` e.g. `test.worker.js`.
```javascript
// test.worker.js
// Post data to parent thread
self.postMessage({ foo: 'foo' })

// Respond to message from parent thread
self.addEventListener('message', (event) => console.log(event))

```

```javascript
// App.js
import './App.css';

if (process.env.BUILD_TARGET==='client') {

  const Worker = require('./test.worker');

  worker.postMessage({ a: 1 });
  worker.onmessage = function (event) {};

  worker.addEventListener("message", function (event) {});

}

import React from 'react';
const App = () => <div>Welcome to Razzle.</div>;

export default App;

```