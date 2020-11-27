import axios from "axios";
const BASEURL = "https://randomuser.me/api/"

// eslint-disable-next-line
export default {
    getEmployees: function() {
        return axios.get(BASEURL)
    }
}
