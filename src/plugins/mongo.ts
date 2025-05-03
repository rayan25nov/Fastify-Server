// src/plugins/mongoPlugin.ts
import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import { MongoClient, Db } from "mongodb";

// Extend FastifyInstance to include the "mongo" property
declare module "fastify" {
  interface FastifyInstance {
    mongo: Db;
  }
}

// Plugin to connect to MongoDB
export default fp(async (fastify: FastifyInstance) => {
  const uri = fastify.config.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    // fastify.log.info("MongoDB connected");
    fastify.decorate("mongo", client.db());
  } catch (err) {
    // fastify.log.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
});
