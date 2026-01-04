import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    // kun format ma data pathaunne backend lai
    "Content-Type": "application/json",
    //kun format ,a data accept garne backend bata
    Accept: "application/json",
  },
});
export {API};










































