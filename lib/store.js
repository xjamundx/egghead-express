import { readFile, writeFile } from "fs/promises";
import path from "path";

const filename = "notes.json";
const dataDir = "data";

export async function save(data) {
  const fullPath = path.resolve(dataDir, filename);
  console.log(`writing to ${fullPath}`);
  const serializedData = JSON.stringify(Array.from(data.entries()));
  await writeFile(fullPath, serializedData);
}

export async function read() {
  const fullPath = path.resolve(dataDir, filename);
  console.log(`reading from ${fullPath}`);
  const data = await readFile(fullPath, "utf-8");
  const parsed = JSON.parse(data);
  return new Map(parsed);
}
