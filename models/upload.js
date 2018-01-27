const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  UserID: String,
  name: String,
  kwh: Number,
  bill: Number
});

const Upload = mongoose.model("Upload", UploadSchema);
module.exports = Upload;
