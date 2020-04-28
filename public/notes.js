// dom elements
const markdown = document.getElementById("markdown");
const output = document.getElementById("output");
const save = document.getElementById("save");

// register events
document.getElementById("markdown").addEventListener("input", handleChange);
document.getElementById("save").addEventListener("click", handleSave);

// helper functions
function handleChange(e) {
  const html = marked(e.target.value);
  output.innerHTML = html;
}

function handleSave(e) {
  e.target.disabled = true;
}
