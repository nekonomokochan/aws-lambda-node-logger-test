(async () => {
  "use strict";

  const awsEnvCreator = require("@nekonomokochan/aws-env-creator");

  const params = {
    type: ".env",
    outputDir: "./",
    secretId: "dev/app",
    profile: "nekochans-dev",
    region: "ap-northeast-1"
  };

  await awsEnvCreator.createEnvFile(params);
})();
