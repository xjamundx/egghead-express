import * as Note from "../model/note.js";

export function list(req, res) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc";
  if (!(sort === "asc" || sort === "desc")) {
    return res.status(400).send("Invalid sort Params");
  }
  const notes = Note.getNotes();
  console.log({ notes });
  res.json({ notes });
}

export function create(req, res) {
  const { title, body } = req.body;
  if (title === undefined || body === undefined) {
    return res.status(400).send("Missing title or body");
  }
  const note = Note.createNote({ title, body });
  console.log({ note });
  res.send("ok");
}

export function read(req, res) {
  // notes/:id
  const { id } = req.params;
  const note = Note.getNote(id);
  res.json({ note });
}

export function update(req, res) {
  const { id } = req.params;
  const { title, body } = req.body;
  if (title === undefined && body === undefined) {
    return res.status(400).send("Missing title and body");
  }
  const note = Note.updateNote(id, { title, body });
  console.log({ note });
  res.send("ok");
}

export function deleteNote(req, res) {
  const { id } = req.params;
  const success = Note.deleteNote(id);
  console.log(`deleting ${id}`, success);
  res.send("ok");
}
