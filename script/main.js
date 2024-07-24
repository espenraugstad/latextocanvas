const textIn = document.getElementById("textIn");
const transform = document.getElementById("transform");
const textOut = document.getElementById("textOut");
const copy = document.getElementById("copy");
const copied = document.getElementById("copied");
const embeddable = document.getElementById("embeddable");
const copyEmbed = document.getElementById("copyEmbed");

transform.addEventListener("click", handleTransformation);
copy.addEventListener("click", copyResult);
copyEmbed.addEventListener("click", copyEmbedding);

function handleTransformation() {
  let inputValue = textIn.value;
  let outputValue = "";
  let left = true;
  let arrayOfUnicodeValues = [];
  for (let i = 0; i < inputValue.length; i++) {
    arrayOfUnicodeValues.push(inputValue.charCodeAt(i));
  }
  let settttt = new Set(arrayOfUnicodeValues.sort());
  console.log(settttt);

  for (let char of inputValue) {
    if (char === "$" && left) {
      outputValue += "\\(";
      left = !left;
    } else if (char === "$" && !left) {
      outputValue += "\\)";
      left = !left;
    } else {
      if (char === "\n" || char === "\r") {
        outputValue += "";
      } else {
        outputValue += char;
      }
    }
  }
  textOut.value = outputValue;
}

async function copyResult() {
  await navigator.clipboard.writeText(textOut.value);
  copied.showModal();
  setTimeout(() => {
    copied.close();
  }, 900);
}

async function copyEmbedding() {
  await navigator.clipboard.writeText(embeddable.value);
  copied.showModal();
  setTimeout(() => {
    copied.close();
  }, 900);
}
