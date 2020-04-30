export async function getNotes() {
  const results = await fetch("/notes");
  const data = await results.json();
  return data.notes;
}
