import * as Note from "../public/model.js";

export function generateNotes() {
  Note.addNote({
    title: "Washington State",
    body: `# Washington State

Has a lot of trees.

![Lucia Falls](./washington.jpg)
`,
  });

  Note.addNote({
    title: "California",
    body: `# California

Gets a lot of sun and has great beaches.

![Big Sur](./california.jpg)
`,
  });
}
