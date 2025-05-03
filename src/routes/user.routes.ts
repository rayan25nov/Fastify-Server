// src/routes/user.routes.ts
import { FastifyInstance } from "fastify";
import {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../services/user.service.js";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/users",
    {
      schema: {
        description: "Get all users",
        tags: ["user"],
        response: {
          200: {
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: { type: "string" },
                name: { type: "string" },
                email: { type: "string" },
              },
            },
          },
        },
      },
    },
    async (req, reply) => {
      const users = await getAllUsers(fastify);
      reply.code(200).send(users);
    }
  );

  fastify.get(
    "/users/:id",
    {
      schema: {
        description: "Get user by ID",
        tags: ["user"],
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              _id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" },
            },
          },
          404: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    async (req, reply) => {
      const user = await getUserById(fastify, (req.params as any).id);
      if (!user) return reply.code(404).send({ message: "User not found" });
      reply.send(user);
    }
  );

  fastify.post(
    "/users",
    {
      schema: {
        description: "Create a new user",
        tags: ["user"],
        body: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
          },
        },
        response: {
          201: {
            type: "object",
            properties: {
              insertedId: { type: "string" },
            },
          },
        },
      },
    },
    async (req, reply) => {
      const { name, email, password } = req.body as {
        name: string;
        email: string;
        password: string;
      };
      const insertedId = await createNewUser(fastify, { name, email, password });
      reply.code(201).send({ insertedId });
    }
  );

  fastify.put(
    "/users/:id",
    {
      schema: {
        description: "Update a user by ID",
        tags: ["user"],
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
        },
        body: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              updatedCount: { type: "number" },
            },
          },
        },
      },
    },
    async (req, reply) => {
      const { name, email, password } = req.body as {
        name: string;
        email: string;
        password: string;
      };
      const updatedCount = await updateUserById(fastify, (req.params as any).id, {
        name,
        email,
        password,
      });
      reply.code(200).send({ updatedCount });
    }
  );

  fastify.delete(
    "/users/:id",
    {
      schema: {
        description: "Delete a user by ID",
        tags: ["user"],
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              deletedCount: { type: "number" },
            },
          },
        },
      },
    },
    async (req, reply) => {
      const deletedCount = await deleteUserById(fastify, (req.params as any).id);
      reply.code(200).send({ deletedCount });
    }
  );
}

