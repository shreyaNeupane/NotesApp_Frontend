import React, { useState } from 'react'
import toast from 'react-hot-toast'
import NoteService from './../services/NoteService';
import NoteForm from './component/NoteForm';
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const [title,setTitle]=useState("");
  const [description ,setdescription] =useState("");
const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    try{
    e.preventDefault()
    const data = {title,description}
    if(!title || !description){
      toast.error("please enter required data")
      return;
    }
    const res =  await NoteService.createNote(data)
    console.log(res)
    toast.success("task added sucessfully")
    navigate("/")
    setTitle("")
      setdescription("")
    }catch(error){
      console.log(error)
      toast.error(error.message)
    }

    
  }


return(
<NoteForm onsubmit={handleSubmit} type='createNote' title={title} setTitle={setTitle} description={description} setdescription={setdescription} />
)
}


export default CreateNote
