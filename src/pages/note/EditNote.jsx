import toast from "react-hot-toast";
import NoteService from "../services/NoteService";
import NoteForm from "./component/NoteForm";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const navigate = useNavigate()
  const id = useParams()
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const data = { title, description };
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      if (!title || !description) {
        toast.error("please fill required fields");
      }
     await NoteService.editNote(id,data);
     toast.success("Note updated sucessfully")
     navigate("/")
      
    } catch (error) {
      console.log(error);
      toast.error("Update failed")
    }
  };

  return (
    <NoteForm
      type="edit"
      onsubmit={handleEdit}
      title={title}
      setTitle={setTitle}
      description={description}
      setdescription={setdescription}
    />
  );
};
export default EditNote;
