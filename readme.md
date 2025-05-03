# Fastify Server Project

This project is a server application built using Fastify and pnpm. It is designed to provide a robust and scalable API with various endpoints for user management.

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

## 🛠️ Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd fastify
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables by creating a `.env` file based on the provided `.env.example`.

### Development

Run the server in development mode:

```bash
pnpm dev
```

### Building

Compile TypeScript to JavaScript:

```bash
pnpm build
```

### Running Tests

Execute unit tests:

```bash
pnpm test
```

## 📜 License

[ISC License](LICENSE)

## 👥 Contributors

- [Contributor Name](https://github.com/username)
