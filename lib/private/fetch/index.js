module.exports = {
  friendlyName: 'Fetch',

  description: 'Perform HTTP requests using node-fetch',

  extendedDescription: 'If you find yourself importing node-fetch a lot in your application, this helper will remove the need for that',

  moreInfo: 'https://github.com/node-fetch/node-fetch',

  inputs: {
    uri: {
      type: 'string',
      description: 'The URI to make the request to',
      example: 'https://',
      required: true
    },
    options: {
      type: 'ref',
      description: 'options object',
      defaultsTo: {}
    }
  },
  exits: {
    success: {
      outputFriendlyName: 'Response',

    }
  },
  fn: async function({ uri, options }, exits) {
    const fetch = require('node-fetch');
    try {
      const response = await fetch(uri, options);
      const jsonResponse = await response.json();
      return exits.success(jsonResponse);
    } catch (error) {
      throw exits.error(error);
    }
  }
};
