
const Helper = require("../helpers/forgot_password.helper");
const helper = new Helper();
const urlPrefix = "/api/test";

describe("Forgot password endpoints", () => {
  test("Consuming API endpoint", async () => {
      const { body } = await helper.apiServer
          .post(`${urlPrefix}`, {
              
          })
      expect(body).toEqual("Testing with travis");
  });
});