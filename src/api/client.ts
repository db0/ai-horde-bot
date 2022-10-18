import axios from "axios";
import config from "../config.js";

export default axios.create({
    baseURL: "https://koboldai.net/api/v2",
});
