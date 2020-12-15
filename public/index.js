const copy2clipboard = document.getElementById("copy2clipboard");
let text2clipboard = document.getElementById("text2clipboard");

copy2clipboard.addEventListener("click", () => {
  let text2copy = text2clipboard.value.trim();
  if (text2copy) {
    navigator.clipboard
      .writeText(text2copy)
      .then(() => {
        text2copy.value = "";
        if (copy2clipboard.innerText !== "Copied!") {
          const originalText = copy2clipboard.innerText;
          //   copy2clipboard.innerText = "Copied!";
          setTimeout(() => {
            copy2clipboard.innerText = originalText;
          }, 1500);
        }
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }
});
