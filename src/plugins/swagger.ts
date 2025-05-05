import fp from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";

export default fp(async (fastify: FastifyInstance) => {
  // Enable CORS for Swagger endpoints (if not already done in app.ts)
  // fastify.register(require('@fastify/cors'), { origin: '*' });

  // Register OpenAPI (Swagger) specification
  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: "User CRUD API",
        description: "API documentation for User CRUD operations",
        version: "1.0.0",
      },
      servers: [
        {
          url:
            process.env.BASE_URL || "https://fastify-server-seven.vercel.app",
        },
      ],
    },
  });

  // Register Swagger UI at /docs
  await fastify.register(fastifySwaggerUI, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  });
});
