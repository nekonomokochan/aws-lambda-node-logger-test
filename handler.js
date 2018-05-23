'use strict';

const awsLambdaNodeLogger = require("@nekonomokochan/aws-lambda-node-logger");

module.exports.jsTest = (event, context, callback) => {
  const response = {
    statusCode: 500,
    body: JSON.stringify({
      message: 'JavaScript Test',
      input: event,
    }),
  };

  const error = new Error("JavaScript Error Test");

  awsLambdaNodeLogger.LambdaLogger.debug(response);
  awsLambdaNodeLogger.LambdaLogger.error(error);

  callback(null, response);
};
