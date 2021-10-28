import Axios from "axios";
import * as process from "process";

export default Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
