export async function getNotes() {
  const results = await fetch("/notes");
  const data = await results.json();
  return data.notes;
}

export async function getNote(id) {
  const results = await fetch(`/notes/${id}`);
  const data = await results.json();
  return data.note;
}
