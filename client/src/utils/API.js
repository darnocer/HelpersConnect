import axios from "axios";

export default {
  addEvent: function (userData) {
    console.log("boop", userData);
    return axios.put("/api/events/:id", userData);
  },
};
