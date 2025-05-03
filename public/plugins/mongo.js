// src/plugins/mongoPlugin.ts
import fp from "fastify-plugin";
import { MongoClient } from "mongodb";
// Plugin to connect to MongoDB
export default fp(async (fastify) => {
    const uri = fastify.config.MONGO_URI;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // fastify.log.info("MongoDB connected");
        fastify.decorate("mongo", client.db());
    }
    catch (err) {
        // fastify.log.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
});
