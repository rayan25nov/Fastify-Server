import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
export default fp(async (fastify) => {
    await fastify.register(swagger, {
        swagger: {
            info: {
                title: "User CRUD API",
                description: "API documentation for User CRUD operations",
                version: "1.0.0",
            },
            host: "localhost:8080",
            schemes: ["http"],
            consumes: ["application/json"],
            produces: ["application/json"],
        },
    });
    await fastify.register(swaggerUI, {
        routePrefix: "/docs",
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    });
});
