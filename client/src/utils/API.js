import axios from "axios";

export default {
  // //Send Search Data
  // getArticlesFromAPI: function(articleData) {
  //   console.log("Grabbing Articles...");
  //   return axios.post("/api/articles/find", articleData);
  // },
  //
  // //Retrieve Article Results To Render Results Page
  // retrieveArticleResults: function() {
  //   return axios.get("api/articles/find");
  // },
  //
  // //Save Articles
  // saveArticles: function(articleId) {
  //   return axios.put("api/articles/find/" + articleId);
  // },
  //
  // //Render Saved Articles
  // retrieveSavedArticles: function() {
  //   return axios.get("api/articles/saved");
  // }
  signUpNewUser: function(userData) {
    return axios.post("/auth/signup", userData);
  },

  loginUser: function(loginCredentials) {
    return axios.post("/auth/login", loginCredentials);
  }
};
