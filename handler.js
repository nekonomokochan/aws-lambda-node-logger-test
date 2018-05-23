'use strict';

const awsLambdaNodeLogger = require("@nekonomokochan/aws-lambda-node-logger");

module.exports.jsTest = (event, context, callback) => {
  const response = {
    statusCode: 500,
    body: JSON.stringify({
      message: 'emergency test',
      input: event,
    }),
  };

  awsLambdaNodeLogger.LambdaLogger.alert(response);

  callback(null, response);
};
