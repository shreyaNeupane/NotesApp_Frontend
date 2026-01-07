import { API } from "../http"

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const createNote=(data)=>{
  API.post("/note/create",data)
}

const getNote = (data) => {
  return  API.get("/note/all",data)
}
const NoteService = {createNote ,getNote}
export default NoteService


