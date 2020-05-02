import express from "express";
import * as notes from "../controller/notes.js";

const router = express.Router();

router.get("/notes", notes.list);
router.post("/notes", notes.add);
router.post("/notes/:id", notes.update);
router.get("/notes/:id", notes.read);
router.use("/notes", (req, res) => {
  res.status(404).send("😦");
});

export default router;
