import { createEnvFile, EnvFileType, AwsRegion } from "@nekonomokochan/aws-env-creator";

describe("createEnvFile", () => {
  it("should be able to create a .env", async () => {
    const params = {
      type: EnvFileType.dotenv,
      outputDir: "./",
      secretId: "dev/app",
      profile: "nekochans-dev",
      region: AwsRegion.ap_northeast_1
    };

    await createEnvFile(params);
  });
});
