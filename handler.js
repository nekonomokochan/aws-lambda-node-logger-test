'use strict';

module.exports.emergency = (event, context, callback) => {
  const response = {
    statusCode: 500,
    body: JSON.stringify({
      message: 'emergency test',
      input: event,
    }),
  };

  callback(null, response);
};
