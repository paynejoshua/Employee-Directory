import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=10&&nat=us&&inc=name,phone,email,id"

// eslint-disable-next-line
export default {
    getEmployees: function() {
        return axios.get(BASEURL)
    }
}
