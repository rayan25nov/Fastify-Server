// api/index.js
import app from "../dist/app.js";

// bootstrap once
let readyPromise = app.ready();

export default async function handler(req, res) {
  await readyPromise;
  app.server.emit("request", req, res);
}
