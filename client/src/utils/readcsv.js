let fileInput = (event) => {
  var file = event.target.files[0];
  var textType = /text.*/;
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

let drop_handler = (event) => {
  event.preventDefault();
  console.log(event.dataTransfer.items[0].kind);
  console.log(event.dataTransfer.items[0].type);
};

let dragover_handler = (event) => {
  event.preventDefault();
  document.getElementById("pgeCsvForm").style.borderColor = "#00b8d8";
  document.getElementById("pgeCsvForm").style.backgroundColor = "#17c671";
};

let dragexit_handler = (event) => {
  event.preventDefault();
  console.log(event.type);
  document.getElementById("pgeCsvForm").style.borderColor = "#e9ecef";
  document.getElementById("pgeCsvForm").style.backgroundColor = "#ffffff";
};

export {
  fileInput,
  drop_handler,
  dragover_handler,
  dragexit_handler
};