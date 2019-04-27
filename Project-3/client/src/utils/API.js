import axios from 'axios';

export default {
    // Gets all books
    // getBooks: function() {
    //   return axios.get("/api/books");
    // },
    // // Gets the book with the given id
    // getBook: function(id) {
    //   return axios.get("/api/books/" + id);
    // },
    // // Deletes the book with the given id
    // deleteBook: function(id) {
    //   return axios.delete("/api/books/" + id);
    // },
    // Saves a book to the database
    saveEvent: function(eventData) {
      console.log("API.js", eventData);
      return axios.post("/api/events", eventData);
    },

    addNewUser: function(user) {
      return axios.post("/api/users/", user);
    },
    
    getAllUsers: function(user) {
      return axios.get("/api/users/?" + Object.keys(user).map(
        (key) => {
          return key + "=" + user[key]; 
        }
      ).join("&"));
    }
  };
  