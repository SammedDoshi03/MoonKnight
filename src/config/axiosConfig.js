const axios = require('axios');

const instance = axios.create({
    baseURL: "http://10.0.2.2:12345/",
    timeout: 15000,
})

export default instance;