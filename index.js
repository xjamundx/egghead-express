import express from "express";
import routes from "./routes/index.js";
import morgan from "morgan";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

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
