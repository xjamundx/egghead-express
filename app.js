import express from "express";
import { generateNotes } from "./lib/index.js";
import routes from "./lib/routes.js";

generateNotes();

const app = express();
app.use(express.static("public"));
app.use(routes);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});
app.listen("3000", () => {
  console.log("app listening on port 3000");
});
