# sails-hook-node-fetch

[![made in nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=for-the-badge)](https://github.com/acekyd/made-in-nigeria)

Exposes the [node-fetch](https://github.com/node-fetch/node-fetch) module as a built-in helper in your Sails app.

# Installation

```sh
npm install @sailscasts/sails-hook-node-fetch --save
```

# Usage

```sh
var wavesNGNPrice = await sails.helpers.fetch('https://waves-africa-api.herokuapp.com/ngn');
sails.log(wavesNGNPrice);
```

> For more info on the usage of this hook see the [node-fetch](https://github.com/node-fetch/node-fetch) documentation as this hook exposes the same API as `node-fetch`