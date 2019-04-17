import axios from "axios";

export default {
  // Gets all forms
  getSignUpForm: function() {
    return axios.get("/api/users");
  },

  saveSignUpForm: function() {
    return axios.get("/api/users");
  },

  
  // Gets the book with the given id
//   getFormCenter: function(id) {
//     return axios.get("/api/books/" + id);
//   },
  // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
