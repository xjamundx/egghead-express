import * as Note from "../public/model.js";
import { getID } from "../lib/index.js";

export function list(req, res, next) {
  const notes = Note.getNotes();
  res.json({ notes });
}

export function add(req, res, next) {
  const id = Note.addNote(getID());
  res.json({ id });
}

export function update(req, res, next) {
  const id = req.params.id;
  const { content, name } = req.body;
  if (content) Note.updateNote(id, content);
  if (name) Note.renameNote(id, name);
  res.json({ note: Note.getNote(id) });
}

export function read(req, res, next) {
  const id = req.params.id;
  res.json({ note: Note.getNote(id) });
}
