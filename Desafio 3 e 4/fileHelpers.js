function loadFile(arquivo) {
  let input = document.getElementById("archive");
  readFile(input.files[0], arquivo);
}

function readFile(file, arquivo) {
  const fileExtension = "text";
  console.log(file.type);
  if (!file.type.match(fileExtension)) {
    return alert(
      "Envie um arquivo de texto! Alguns outros arquivos não são permitidos, como: imagens e pdfs"
    );
  }
  let fr = new FileReader();
  fr.onload = async function () {
    arquivo.setContent(await fr.result);
  };
  fr.readAsText(file);
}

function showContent(arquivo) {
  console.log(arquivo.getContent());
  const editor = document.getElementById("editor");
  editor.innerText = arquivo.getContent();
}
