import * as lambda from 'aws-lambda';
import * as sourceMapSupport from 'source-map-support';
import { LambdaLogger } from "@nekonomokochan/aws-lambda-node-logger";

sourceMapSupport.install();

export const tsTest = (event: lambda.APIGatewayEvent, context: lambda.Context, callback: lambda.Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'TypeScript Test',
      input: event,
    }),
  };

  const error = new Error("TypeScript Error Test");

  LambdaLogger.error(error);
  LambdaLogger.debug(context);

  callback(undefined, response);
};
