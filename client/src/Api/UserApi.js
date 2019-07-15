import axios from "./axios";

export default {
  login(data) {
    return axios.post("user/login", data);
  }
};
