import { v4 as uuid } from "uuid";

const NOTES = new Map();

// Note {
//  id: string
//  title: string
//  body: string
//  lastEdited: Date
// }

export function getNotes(sort) {
  const notes = Array.from(NOTES.values());
  notes.sort((a, b) => {
    if (sort === "asc") {
      return a.lastEdited - b.lastEdited;
    } else {
      return b.lastEdited - a.lastEdited;
    }
  });
  return notes;
}

export function createNote({ title, body }) {
  const id = uuid();
  const lastEdited = Date.now();
  const note = {
    id,
    lastEdited,
    title,
    body,
  };
  NOTES.set(id, note);
  return note;
}

export function updateNote(id, { title, body }) {
  if (!NOTES.has(id)) {
    return null;
  }
  const note = NOTES.get(id);
  note.title = title ?? note.title;
  note.body = body ?? note.body;
  note.lastEdited = Date.now();
  return { ...note };
}

export function getNote(id) {
  if (!NOTES.has(id)) {
    return null;
  }
  const note = NOTES.get(id);
  return { ...note };
}

export function deleteNote(id) {
  return NOTES.delete(id);
}
