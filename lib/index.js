import * as Note from "../public/model.js";

export function generateNotes() {
  // simulated notes
  let id = Note.addNote(getID());
  Note.renameNote(id, "Washington State");
  Note.updateNote(
    id,
    `# Washington State

Has a lot of trees.

![Lucia Falls](./washington.jpg)
`
  );

  id = Note.addNote(getID());
  Note.renameNote(id, "California");
  Note.updateNote(
    id,
    `# California

Gets a lot of sun and has great beaches.

![Big Sur](./california.jpg)
`
  );
}
