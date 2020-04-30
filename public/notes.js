import * as Note from "./model.js";
import { getID } from "./lib.js";
import { getNotes, getNote } from "./xhr.js";

// dom elements
const markdown = document.getElementById("markdown");
const output = document.getElementById("output");
const save = document.getElementById("save");
const add = document.getElementById("add");
const title = document.getElementById("title");
const notes = document.getElementById("notes");
const input = document.getElementById("input");

// register events
markdown.addEventListener("input", handleContentChange);
title.addEventListener("input", handleNameChange);
save.addEventListener("click", handleSave);
add.addEventListener("click", addNote);
window.addEventListener("hashchange", onPageChange, false);

// bootstrap the rendering of the page
getNotes().then((notes) => {
  Note.populate(notes);
  onPageChange();
});

async function onPageChange() {
  updateNav();
  const id = location.hash.slice(1);
  const note = await getNote(id);
  input.classList.toggle("pointer-events-none", !note);
  input.classList.toggle("opacity-50", !note);
  if (note) {
    updateTitle(note.name);
    updateContent(note.content);
    renderMarkdown();
  }
}

// helper functions
function handleContentChange(e) {
  renderMarkdown();

  // also update the stored note
  const id = location.hash.slice(1);
  Note.updateNote(id, e.target.value);
}

function renderMarkdown() {
  const html = marked(markdown.value);
  output.innerHTML = html;
}

function handleNameChange(e) {
  const id = location.hash.slice(1);
  Note.renameNote(id, e.target.value);
  updateNav();
}

function handleSave(e) {
  const id = location.hash.slice(1);
  Note.updateNote(id, e.target.value);
}

function updateContent(note) {
  markdown.value = note;
}

function updateTitle(name) {
  title.value = name;
}

function addNote(e) {
  const id = getID();
  Note.addNote(id);
  updateNav();
}

function updateNav() {
  const currentID = location.hash.slice(1);

  const html = Note.getNotes()
    .map(([id, name]) => {
      const cls = id === currentID ? "bg-blue-300 text-black" : "";
      return `<li><a href="#${id}" class="block ${cls}">${name}&nbsp;</a></li>`;
    })
    .join("");
  notes.innerHTML = html;
}
