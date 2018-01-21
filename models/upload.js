const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  ID: String,
  name: String,
  kwh: String,
  age: String,
  forcepoints: String,
});

const Upload = mongoose.model("Upload", UploadSchema);
module.exports = Upload;
