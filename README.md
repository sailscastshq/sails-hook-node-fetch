# sails-hook-node-fetch

Exposes the [node-fetch](Exposes the [node-fetch](https://github.com/node-fetch/node-fetch) module as built-in helpers in your Sails app.

# Installation

```sh
npm install sails-hook-organics --save
```

# Usage

```sh
var wavesNGNPrice = await sails.helpers.fetch('https://waves-africa-api.herokuapp.com/ngn');
sails.log(wavesNGNPrice);
```