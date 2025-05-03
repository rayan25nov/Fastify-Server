// src/services/user.service.ts
import { FastifyInstance } from "fastify";
import { User, createUser } from "../models/user.model";
import { ObjectId } from "mongodb";

export const createNewUser = async (
  fastify: FastifyInstance,
  userData: { name: string; email: string; password: string }
) => {
  const user: User = createUser(userData);
  const result = await fastify.mongo.collection("users").insertOne(user);
  return result.insertedId;
};

export const getAllUsers = async (fastify: FastifyInstance) => {
  return await fastify.mongo.collection("users").find().toArray();
};

export const getUserById = async (fastify: FastifyInstance, id: string) => {
  return await fastify.mongo
    .collection("users")
    .findOne({ _id: new ObjectId(id) });
};

export const updateUserById = async (
  fastify: FastifyInstance,
  id: string,
  userData: { name: string; email: string; password: string }
) => {
  const result = await fastify.mongo
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: userData });
  return result.modifiedCount;
};

export const deleteUserById = async (fastify: FastifyInstance, id: string) => {
  const result = await fastify.mongo
    .collection("users")
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};
