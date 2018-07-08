import * as lambda from "aws-lambda";
import * as sourceMapSupport from "source-map-support";
import { LambdaLoggerFactory, LogLevel } from "@nekonomokochan/aws-lambda-node-logger";

sourceMapSupport.install();

export const tsTest = async (event: lambda.APIGatewayEvent, context: lambda.Context, callback: lambda.Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "TypeScript Test",
      input: event,
    }),
  };

  const error = new Error("TypeScript Error Test");

  const lambdaLogger = LambdaLoggerFactory.create(
    LogLevel.DEBUG,
    extractSlackTokenFromEnv(),
    extractSlackChannelFromEnv()
  );

  await lambdaLogger.error(error, true);
  await lambdaLogger.debug(context, true);

  callback(undefined, response);
};

/**
 * @return {string}
 */
const extractSlackTokenFromEnv = (): string => {
  const slackToken = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_TOKEN;
  if (typeof slackToken === "string") {
    return slackToken;
  }

  return "";
};

/**
 * @return {string}
 */
const extractSlackChannelFromEnv = (): string => {
  const slackChannel = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_CHANNEL;
  if (typeof slackChannel === "string") {
    return slackChannel;
  }

  return "";
};
