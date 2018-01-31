import axios from "axios";

let fileInput = (event) => {
  var file = event.target.files[0] || event.dataTransfer.items[0].getAsFile();
  var textType = /text.csv/;

  displayFileData(file);

  if (file.type.match(textType)) {

    // Read the contents of the file
    // var reader = new FileReader();
    // reader.onload = function () {
    // document.getElementById("fileContent").innerText = reader.result;
    // };
    // // reader.readAsText(file);

    // Create formData object to send to server
    var data = new FormData();
    // Append the username and id to the data object
    data.append("username", document.getElementById("username").value);
    data.append("userid",document.getElementById("userid").value);
    // Append the file to the data object
    data.append('pgeCsv', file, file.name);

    // Send file and form data to the server
    axios.post("http://localhost:3001/api/upload", data, axiois_config)
    .then(function (res) {
      console.log(res);
      // output.className = 'container';
      // output.innerHTML = res.data;
    })
    .catch(function (err) {
      console.log(err);
      // output.className = 'container text-danger';
      // output.innerHTML = err.message;
    });

  } else {
    var danger = document.getElementById("alert_danger");
    danger.innerText = "Unsupported file type! File must be a csv!";
    danger.style.display = "block";
    setTimeout(() => {
      danger.style.display = "none";
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
  form.classList.remove("file__correct", "file__incorrect");
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
  form.classList.remove("file__correct", "file__incorrect");
};

function displayFileData(file) {
  document.getElementById("fileData").innerHTML =
    `<div><strong>File name:</strong> ${file.name}\n
  <div><strong>File type:</strong> ${file.type}\n
  <div><strong>File size:</strong> ${file.size}\n`;
}

const axiois_config = {
  onUploadProgress: function(progressEvent) {
    var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
    console.log(percentCompleted);
  }
};

export {
  choose_handler,
  drop_handler,
  dragover_handler,
  dragexit_handler
};