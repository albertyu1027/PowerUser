import axios from "axios";

export default {
  // Gets all books
  getUploads: function() {
    return axios.get("/api/uploads");
  },
  // Gets the book with the given id
  getUpload: function(id) {
    return axios.get("/api/uploads/" + id);
  },
  // Deletes the book with the given id
  deleteUpload: function(id) {
    return axios.delete("/api/uploads/" + id);
  },
  // Saves a book to the database
  saveUpload: function(uploadData) {
    return axios.post("/api/uploads", uploadData);
  },

  signUpNewUser: function(userData) {
  return axios.post("/auth/signup", userData);
}
};
