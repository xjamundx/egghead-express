import uuid from "uuid";
import * as Note from "../public/model.js";

export function getID() {
  return uuid.v4();
}

export function generateNotes() {
  // simulated notes
  let id = Note.addNote(getID());
  Note.renameNote(id, "Washington State");
  Note.updateNote(
    id,
    `
# Washington State

Has a lot of trees
`
  );

  id = Note.addNote(getID());
  Note.renameNote(id, "California");
  Note.updateNote(
    id,
    `
# California

Gets a lot of sun.
`
  );
}
