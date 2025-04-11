import axios from "axios";

async function useFetch(api, method, body = {}) {
    try {
        const config = {
            url: `http://18.195.123.166:3001/api/tasks${api}`,
            method,
        };

        if (method !== 'get' && method !== 'delete') {
            config.data = body;
        }

        const res = await axios.request(config);
        return res;
    } catch (error) {
        console.error("Error in useFetch:", error.message);
        throw error;
    }
}

export default useFetch;
