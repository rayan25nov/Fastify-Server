import "fastify";
import { MongoClient, Db } from "mongodb";

declare module "fastify" {
  interface FastifyInstance {
    mongo: {
      client: MongoClient;
      db: Db;
    };
  }
}
