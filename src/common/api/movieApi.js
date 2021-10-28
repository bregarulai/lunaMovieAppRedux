import Axios from "axios";

export default Axios.create({
  baseURL: process.env.BASE_URL,
});
