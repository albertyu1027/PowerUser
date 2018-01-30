// import axios from "axios";

let fileInput = (event) => {
  var file = event.target.files[0] || event.dataTransfer.items[0].getAsFile();
  var textType = /text.csv/;
  var details = {
    name: file.name,
    type: file.type,
    size: file.size
  };

  document.getElementById("fileData").innerText = JSON.stringify(details);

  if (file.type.match(textType)) {
    var reader = new FileReader();

    reader.onload = function () {
      document.getElementById("fileContent").innerText = reader.result;
    };

    reader.readAsText(file);
  } else {
    document.getElementById("fileContent").innerText = "File not supported!";
  }
};

let choose_handler = (event) => {
  event.preventDefault();
  fileInput(event);
};

let drop_handler = (event) => {
  event.preventDefault();
  fileInput(event);
};

let dragover_handler = (event) => {
  event.preventDefault();
  var form = document.getElementById("pgeCsvForm");
  console.log(event.dataTransfer.items[0].type);
  form.classList.add("file__correct");
};

let dragexit_handler = (event) => {
  event.preventDefault();
  var form = document.getElementById("pgeCsvForm");
  form.classList.remove("file__correct");
};

export {
  choose_handler,
  drop_handler,
  dragover_handler,
  dragexit_handler
};