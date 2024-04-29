import Axios from "axios";

const baseUrl = "http://localhost:5000";

const Instance = Axios.create({
    timeout: 20000,
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export default Instance;
