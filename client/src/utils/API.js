import axios from 'axios';

export default {

    addEvent: function(userData){
        return axios.put("/api/users", userData)
    },
    removeEvent: function(userData){
        return axios.delete("/api/users", userData)
    }
}