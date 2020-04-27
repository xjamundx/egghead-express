// dom elements
const markdown = document.getElementById("markdown");
const output = document.getElementById("output");

// register events
document.getElementById("markdown").addEventListener("input", handleChange);

// helper functions
function handleChange(e) {
  const html = marked(e.target.value);
  output.innerHTML = html;
}

export default {
  handleChange,
};
