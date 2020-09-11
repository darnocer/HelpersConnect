import axios from "axios";

export default {
  addEvent: function (userData) {
    console.log("boop", userData);
    return axios.put("/api/events/:id", userData);
  },

  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
};
