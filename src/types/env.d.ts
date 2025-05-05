// types/env.d.ts
import "fastify";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: string;
      MONGO_URI: string;
      BASE_URL: string;
    };
  }
}
