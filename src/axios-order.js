import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-8fcea.firebaseio.com/",
});

export default instance;
