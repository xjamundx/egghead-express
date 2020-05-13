import * as Note from "../model/note.js";

const validSorts = new Set(["desc", "asc"]);
export function list(req, res) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "";
  if (!validSorts.has(sort)) {
    return res.status(400).send("Invalid Sort Param");
  }
  res.json({ notes });
}

export function add(req, res, next) {
  const { title, body } = req.body;
  if (title === undefined || body === undefined) {
    return res.status(400).send("Missing 'title' or 'body'");
  }
  const note = Note.addNote({ title, body });
  console.log({ note });
  res.send("OK");
}

export function update(req, res, next) {
  const id = req.params.id;
  const { title, body } = req.body;
  if (title === undefined && body === undefined) {
    return res.status(400).send("Missing 'title' and 'body'");
  }
  const note = Note.update(id, { title, body });
  console.log({ note });
  res.send("OK");
}

export function read(req, res) {
  const id = req.params.id;
  const note = Note.getNote(id);
  if (!note) {
    return res.status(400).send("ID not found");
  }
  res.json({ note });
}
