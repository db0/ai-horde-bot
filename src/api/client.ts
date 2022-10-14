import axios from "axios";

export default axios.create({
    baseURL: "https://koboldai.net/api/v2",
});
