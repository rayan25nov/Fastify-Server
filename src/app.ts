import Fastify from "fastify";
import envPlugin from "./plugins/env.js";
import mongoPlugin from "./plugins/mongo.js";
import swagger from "./plugins/swagger.js";
import userRoutes from "./routes/user.routes.js";
import fastifyCors from "@fastify/cors";

const app = Fastify({ logger: true });

// Register CORS
app.register(fastifyCors, {
  origin: "*",
});

app.get("/", async () => {
  return { status: "OK", message: "Welcome to Fastify!" };
});

app.register(swagger);
app.register(envPlugin);
app.register(mongoPlugin);
app.register(userRoutes);

export default app;
