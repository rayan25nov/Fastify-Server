import { createUser } from "../models/user.model.js";
import { ObjectId } from "mongodb";
export const createNewUser = async (fastify, userData) => {
    const user = createUser(userData);
    const result = await fastify.mongo.collection("users").insertOne(user);
    return result.insertedId;
};
export const getAllUsers = async (fastify) => {
    return await fastify.mongo.collection("users").find().toArray();
};
export const getUserById = async (fastify, id) => {
    return await fastify.mongo
        .collection("users")
        .findOne({ _id: new ObjectId(id) });
};
export const updateUserById = async (fastify, id, userData) => {
    const result = await fastify.mongo
        .collection("users")
        .updateOne({ _id: new ObjectId(id) }, { $set: userData });
    return result.modifiedCount;
};
export const deleteUserById = async (fastify, id) => {
    const result = await fastify.mongo
        .collection("users")
        .deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
};
