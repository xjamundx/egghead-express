export async function getNotes() {
  const res = await fetch("/notes");
  const data = await res.json();
  return data.notes;
}

export async function getNote(id) {
  const res = await fetch(`/notes/${id}`);
  if (res.status === 404) {
    return null;
  }
  const data = await res.json();
  return data.note;
}

export async function addNote() {
  //
}
