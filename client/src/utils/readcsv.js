// import axios from "axios";

let fileInput = (event) => {
  var file = event.target.files[0] || event.dataTransfer.items[0].getAsFile();
  var textType = /text.csv/;

  displayFileData(file);

  if (file.type.match(textType)) {
    // var reader = new FileReader();
    // reader.onload = function () {
    // document.getElementById("fileContent").innerText = reader.result;
    // };
    // // reader.readAsText(file);
  } else {
    document.getElementById("alert_danger").innerText = "Unsupported file type! File must be a csv!";
    document.getElementById("alert_danger").style.display = "block";
    setTimeout(() => {
      document.getElementById("alert_danger").style.display = "none";
    }, 3000);
  }
};

let choose_handler = (event) => {
  event.preventDefault();
  fileInput(event);
};

let drop_handler = (event) => {
  event.preventDefault();
  fileInput(event);
  var form = document.getElementById("pgeCsvForm");
  form.classList.remove("file__correct","file__incorrect");
};

let dragover_handler = (event) => {
  event.preventDefault();
  var form = document.getElementById("pgeCsvForm");
  var fileType = event.dataTransfer.items[0].type;
  console.log("File type:", fileType);

  if (fileType === "text/csv") {
    form.classList.add("file__correct");
  } else {
    form.classList.add("file__incorrect");
  }
};

let dragexit_handler = (event) => {
  event.preventDefault();
  var form = document.getElementById("pgeCsvForm");
  form.classList.remove("file__correct","file__incorrect");
};

function displayFileData(file) {
  document.getElementById("fileData").innerHTML =
  `<div><strong>File name:</strong> ${file.name}\n
  <div><strong>File type:</strong> ${file.type}\n
  <div><strong>File type:</strong> ${file.size}\n`;
}

export {
  choose_handler,
  drop_handler,
  dragover_handler,
  dragexit_handler
};