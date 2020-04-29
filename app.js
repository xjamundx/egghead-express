import express from "express";
import { generateNotes } from "./lib/index.js";
import routes from "./lib/routes.js";
import bodyParser from "body-parser";

generateNotes();

const app = express();

// static routes
app.use(express.static("public"));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(routes);

// error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// listen
app.listen("3000", () => {
  console.log("app listening on port 3000");
});
