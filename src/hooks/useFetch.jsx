import axios from "axios";

async function useFetch(api, req, body = {}) {
    try {
        if (!['get', 'post', 'put', 'delete', 'patch'].includes(req)) {
            throw new Error(`Invalid HTTP method: ${req}`);
        }
        const  res  = await axios[req](`http://18.195.123.166:3001/api/tasks${api}`, body);
        console.log(res);
        
        return res;
    } catch (error) {
        console.error("Error in useFetch:", error.message);
        throw error;
    }
}


export default useFetch