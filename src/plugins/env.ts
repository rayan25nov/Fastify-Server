import fp from "fastify-plugin";
import env from "@fastify/env";

const schema = {
  type: "object",
  required: ["PORT", "MONGO_URI", "BASE_URL"],
  properties: {
    PORT: { type: "string" },
    MONGO_URI: {
      type: "string",
    },
    BASE_URL: {
      type: "string",
    },
  },
};

const options = {
  confKey: "config",
  schema,
  dotenv: true,
};

export default fp(async (fastify) => {
  fastify.register(env, options);
});
