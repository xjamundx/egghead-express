const ids = new Set();
export function getID() {
  const array = new Uint32Array(1);
  let [id] = crypto.getRandomValues(array);
  if (ids.has(id)) return getID();
  ids.add(id);
  return String(id);
}
