import axios from "axios";

export default {
  // Gets all uploads
  getUploads: function() {
    return axios.get("/api/uploads");
  },
  // Gets the upload data with the given id
  getUpload: function(id) {
    return axios.get("/api/uploads/" + id);
  },
  getUsername: function(address) {
    return axios.get("/api/uploads/email/" + address);
  },
  signUpNewUser: function(userData) {
    return axios.post("/auth/signup", userData);
  },
  loginUser: function(loginCredentials) {
    return axios.post("/auth/login", loginCredentials);
  }
};
