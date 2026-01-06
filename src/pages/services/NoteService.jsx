import { API } from "../http"

//get token
const token = localStorage.getItem("token")
//make token common for all request
API.defaults.headers.common['Authorization'] = `Bearer ${token}`
const createNote=(data)=>{
  API.post("/note/create",data)
}
const NoteService = {createNote}
export default NoteService


