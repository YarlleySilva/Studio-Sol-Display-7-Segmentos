
import axios from "axios";

const baseUrl = "https://us-central1-ss-devops.cloudfunctions.net";


const api = axios.create({
  baseURL: baseUrl,
});

export default api;