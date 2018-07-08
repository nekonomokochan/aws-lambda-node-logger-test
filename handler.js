"use strict";

const awsLambdaNodeLogger = require("@nekonomokochan/aws-lambda-node-logger");

module.exports.jsTest = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "JavaScript Test",
      input: event,
    }),
  };

  const error = new Error("JavaScript Error Test");

  const lambdaLogger = awsLambdaNodeLogger.LambdaLoggerFactory.create(
    awsLambdaNodeLogger.LogLevel.DEBUG,
    extractSlackTokenFromEnv(),
    extractSlackChannelFromEnv()
  );

  await lambdaLogger.debug(response, true);
  await lambdaLogger.error(error, true);

  callback(null, response);
};

/**
 * @return {string}
 */
const extractSlackTokenFromEnv = () => {
  const slackToken = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_TOKEN;
  if (typeof slackToken === "string") {
    return slackToken;
  }

  return "";
};

/**
 * @return {string}
 */
const extractSlackChannelFromEnv = () => {
  const slackChannel = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_CHANNEL;
  if (typeof slackChannel === "string") {
    return slackChannel;
  }

  return "";
};
