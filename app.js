import express from "express";
import { generateNotes } from "./lib/index.js";
import routes from "./lib/routes.js";
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";

generateNotes();

const app = express();

// middleware
app.use(morgan("dev"));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

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
