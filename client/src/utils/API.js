import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=30&nat=us&inc=name,phone,email,id,login"

// eslint-disable-next-line
export default {
    getEmployees: function() {
        return axios.get(BASEURL)
    }
}
