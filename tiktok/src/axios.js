import axios from "axios";

const instance=axios.create({
    baseURL:"https://merntiktok1.herokuapp.com/"

});

export default instance;