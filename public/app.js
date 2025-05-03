import Fastify from "fastify";
import envPlugin from "./plugins/env.js";
import mongoPlugin from "./plugins/mongo.js";
import swagger from "./plugins/swagger.js";
import userRoutes from "./routes/user.routes.js";
const app = Fastify({ logger: true });
app.get("/", async () => {
    return { status: "OK", message: "Welcome to Fastify!" };
});
app.register(swagger);
app.register(envPlugin);
app.register(mongoPlugin);
app.register(userRoutes);
export default app;
