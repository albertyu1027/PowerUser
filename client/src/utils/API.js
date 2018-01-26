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
<<<<<<< HEAD
    return axios.post("/auth/signup", userData);
  },

  loginUser: function(loginCredentials) {
    return axios.post("/auth/login", loginCredentials);
  }
=======
  return axios.post("/auth/signup", userData);
}
>>>>>>> 979ca2ced42e7b71abc12f5e82340c3f5cac2464
};
