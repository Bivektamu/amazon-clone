import axios from 'axios';

const instance = axios.create({

    // Production
    baseURL: 'https://us-central1-clone-ca2ec.cloudfunctions.net/api',

    // local
    // baseURL: 'http://localhost:5001/clone-ca2ec/us-central1/api',


});

export default instance;