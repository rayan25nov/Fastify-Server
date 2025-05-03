# Fastify Server Project 🚀

![Fastify](https://img.shields.io/badge/Fastify-v4.x-blue?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue?style=flat-square) ![pnpm](https://img.shields.io/badge/pnpm-v8.x-orange?style=flat-square) ![License](https://img.shields.io/badge/License-ISC-green?style=flat-square)

This project is a server application built using **Fastify** and **pnpm**. It is designed to provide a robust and scalable API with various endpoints for user management.

---

## 📚 Table of Contents

- [📚 Table of Contents](#-table-of-contents)
- [📁 Folder Structure](#-folder-structure)
- [🔍 What Each Folder Does](#-what-each-folder-does)
- [🛠️ Getting Started](#️-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Start the Development Server](#start-the-development-server)
- [📜 Available Scripts](#-available-scripts)
- [👥 Contributors](#-contributors)
- [📄 License](#-license)

---

## 📁 Folder Structure

```
└── 📁fastify
        └── 📁src
                └── app.ts
                └── index.ts
                └── 📁models
                        └── user.model.ts
                └── 📁plugins
                        └── env.ts
                        └── mongo.ts
                        └── swagger.ts
                └── 📁routes
                        └── user.routes.ts
                └── 📁services
                        └── user.service.ts
                └── 📁types
                        └── env.d.ts
                        └── mongo.d.ts
        └── .env
        └── .gitignore
        └── package.json
        └── pnpm-lock.yaml
        └── readme.md
        └── tsconfig.json
```

---

## 🔍 What Each Folder Does

| Folder/File | Purpose                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `models/`   | Define the database schema for user entities.                                                        |
| `plugins/`  | Register and configure various plugins such as environment variables and MongoDB.                    |
| `routes/`   | Register API routes with Fastify, defining endpoint handlers.                                        |
| `services/` | Implement business logic and perform database queries.                                               |
| `types/`    | Provide type definitions for TypeScript, including custom Fastify extensions.                        |
| `index.ts`  | Entry point of the application: imports and registers all routes and plugins, and starts the server. |
| `app.ts`    | Sets up and configures the Fastify instance, making it ready for testing or deployment.              |

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rayan25nov/Fastify-Server.git
   cd Fastify-Server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```env
   PORT="8080"
   MONGO_URI="mongodb://localhost:27017/user"
   ```

---

### Start the Development Server

Run the following command to start the server in development mode with hot-reloading enabled:

```bash
pnpm dev
```

---

## 📜 Available Scripts

| Script            | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| `pnpm build`      | Compiles the TypeScript code into JavaScript.                                      |
| `pnpm start`      | Starts the server using the compiled JavaScript files.                             |
| `pnpm dev`        | Runs the server in development mode with TypeScript compilation and hot-reloading. |
| `pnpm test`       | Runs the test suite using Jest.                                                    |
| `pnpm test:watch` | Runs the tests in watch mode for continuous testing during development.            |

---

## 👥 Contributors

- [Rayan Ahmad](https://github.com/rayan25nov)

---

## 📄 License

This project is licensed under the [ISC License](./LICENSE).

---
