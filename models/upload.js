const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  UserID: String,
  username: String,
  date: Number,
  kwhUsage: Number,
  cost: Number
});

const Upload = mongoose.model("Upload", UploadSchema);
module.exports = Upload;
