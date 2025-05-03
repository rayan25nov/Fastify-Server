import app from "./app.js";

const start = async () => {
  try {
    await app.ready();
    await app.listen({ port: parseInt(app.config.PORT) });
    console.log(`Server running on http://localhost:${app.config.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
