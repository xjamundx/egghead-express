import * as Note from "./model.js";
import { getID } from "./lib.js";

// dom elements
const markdown = document.getElementById("markdown");
const output = document.getElementById("output");
const save = document.getElementById("save");
const add = document.getElementById("add");
const title = document.getElementById("title");
const notes = document.getElementById("notes");

// register events
markdown.addEventListener("input", handleContentChange);
title.addEventListener("input", handleNameChange);
save.addEventListener("click", handleSave);
add.addEventListener("click", addNote);
window.addEventListener("hashchange", handleHashChange, false);

// kind of bootstrap the rendering of the page
onPageLoad();

function onPageLoad() {
  updateNav();
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

function handleHashChange(e) {
  const id = location.hash.slice(1);
  highlightCurrentNote(id);
  const note = Note.getNote(id);
  if (note) {
    updateTitle(note.name);
    updateContent(note.content);
    renderMarkdown();
  }
}

function updateContent(note) {
  markdown.value = note;
}

function updateTitle(name) {
  title.value = name;
}

function highlightCurrentNote(id) {
  const highlightedClasses = ["selected", "bg-blue-300", "text-black", "block"];
  const oldLink = document.querySelector(".selected");
  const link = document.querySelector(`a[href="#${id}"]`);

  // remove the old, add thew new ones
  if (oldLink) oldLink.classList.remove(...highlightedClasses);
  if (link) link.classList.add(...highlightedClasses);
}

function addNote(e) {
  const id = getID();
  Note.addNote(id);
  updateNav();
}

function updateNav() {
  const html = Note.getNotes()
    .map(([id, name]) => {
      return `<li><a href="#${id}">${name}</a></li>`;
    })
    .join("");
  notes.innerHTML = html;
}
