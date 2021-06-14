<h1 align="center">vue-ls-loader</h1>

<p align="center">
<a href="https://www.npmjs.com/package/vue-ls-loader"><img src="https://img.shields.io/npm/v/vue-ls-loader.svg"/> <img src="https://img.shields.io/npm/dm/vue-ls-loader.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/></a>
</p>

<p align="center">
The loader of vue-ls for vue, it needs to be used with vue-ls pachage.
Support to use local, session, memory storages at the same time.
</p>

<br />
<br />
<br />

# Getting started

The loader of vue-ls for vue, it needs to be used with vue-ls pachage.
Support to use local, session, memory storages at the same time.

1. Install the package:
```
npm install --save vue-ls-loader
```

2. Add the package into your app:
```javascript
import Vue from 'vue'

import VueLsLoader from 'vue-ls-loader'
Vue.use(VueLsLoader) // default use local storage
or
Vue.use(VueLsLoader, ['local', 'session', 'memory']) //options param is an array, Can use 1-3 storages at the same time
or
Vue.use(VueLsLoader, [{
    storage: 'local',
    namespace: [namespace]
}, {
    storage: 'session',
    namespace: [namespace]
}, {
    storage: 'memory',
    namespace: [namespace]
}])
```

<br />
<br />
<br />

# Change Log

<a href="https://github.com/louisnikai/vue-ls-loader/blob/master/CHANGELOG.md">CHANGELOG.md</a>

<br />
<br />
<br />
