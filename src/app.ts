import Fastify from "fastify";
import envPlugin from "./plugins/env";
import mongoPlugin from "./plugins/mongo";
import swagger from "./plugins/swagger";
import userRoutes from "./routes/user.routes.js";

const app = Fastify({ logger: true });

app.register(swagger);
app.register(envPlugin);
app.register(mongoPlugin);
app.register(userRoutes);

export default app;
