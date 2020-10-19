# sails-hook-node-fetch

[![made in nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=for-the-badge)](https://github.com/acekyd/made-in-nigeria)

Exposes the [node-fetch](https://github.com/node-fetch/node-fetch) module as a built-in helper in your Sails app.

# Installation

```sh
npm install sails-hook-organics --save
```

# Usage

```sh
var wavesNGNPrice = await sails.helpers.fetch('https://waves-africa-api.herokuapp.com/ngn');
sails.log(wavesNGNPrice);
```