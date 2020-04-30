// keeps track of all of our files
// id => { id, name, content }
const notes = new Map();

export function populate(serverNotes) {
  for (let [id, name] of serverNotes) {
    addNote(id, name);
  }
}

export function addNote(id, name = "Untitled") {
  const note = {
    id,
    name,
    content: "# Untitled",
  };
  notes.set(id, note);
  return id;
}

export function updateNote(id, content) {
  const note = notes.get(id);
  note.content = content;
}

export function renameNote(id, name) {
  if (!notes.has(id)) {
    console.warn(`Bad id for note: ${id}`);
    return;
  }
  const note = notes.get(id);
  note.name = name;
}

export function getNotes() {
  const entries = notes.entries();
  return Array.from(entries).map(([key, note]) => {
    return [key, note.name];
  });
}

export function getNote(id) {
  return notes.get(id);
}
