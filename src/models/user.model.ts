// src/models/user.model.ts
import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}

// Optional: helper to sanitize input or set defaults
export const createUser = (data: {
  name: string;
  email: string;
  password: string;
}): User => ({
  name: data.name,
  email: data.email,
  password: data.password,
});
