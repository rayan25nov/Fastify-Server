import fp from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";

export default fp(async (fastify: FastifyInstance) => {
  // Determine path to your SVG logo using project root
  const logoPath = path.join(process.cwd(), "src", "assets", "logo.svg");
  // Read and base64-encode your SVG logo
  const svgBuffer = fs.readFileSync(logoPath);
  const svgBase64 = svgBuffer.toString("base64");

  // Register OpenAPI (Swagger) spec
  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: "User CRUD API",
        description: "API documentation for User CRUD operations",
        version: "1.0.0",
      },
      servers: [
        {
          url: process.env.BASE_URL!,
        },
      ],
    },
  });

  // Register Swagger UI with custom favicon and header logo
  await fastify.register(fastifySwaggerUI, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    theme: {
      favicon: [
        {
          filename: "logo.svg",
          rel: "icon",
          sizes: "any",
          type: "image/svg+xml",
          content: Buffer.from(svgBase64, "base64"),
        },
      ],
    },
    logo: {
      type: "image/svg+xml",
      content: Buffer.from(svgBase64, "base64"),
    },
  });
});
