// Copying the list of stack on the clipboard
const copy2clipboard = document.getElementById("copy2clipboard");
const text2clipboard = document.getElementById("text2clipboard");
const tooltiptext = document.getElementById("tooltiptext");

copy2clipboard.addEventListener("click", () => {
  let text2copy = text2clipboard.value.trim();
  tooltiptext.style.display = "block";
  navigator.clipboard.writeText(text2copy);
  setTimeout(() => {
    tooltiptext.style.display = "none";
  }, 3000);
});
