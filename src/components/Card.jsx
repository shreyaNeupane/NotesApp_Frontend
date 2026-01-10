import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faThumbTack,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import NoteService from "../pages/services/NoteService";
import toast from "react-hot-toast";
import EditNote from "../pages/note/EditNote";
import { useNavigate } from "react-router-dom";
import NoteForm from "../pages/note/component/NoteForm";




const Card = ({ note  ,setNotes}) => {
  const navigate = useNavigate()
  const handleDelete = async () => {
    try {
      await NoteService.deleteNote(note._id);
      // n._id is each note id , note._id is id slected to delete.
        setNotes((prev) => prev.filter((n) => n._id !== note._id));
      toast.success("Note deleted sucessfully.");
      // getNote()
    } catch (error) {
      console.log(error);
      toast.error("failed to delete note");
    }
  };
  // const handleEdit = async() =>{
  //   try{
    
  //     if(!title || !description){
  //       toast.error("Please enter requires fields")
  //     }
  //     const res = await NoteService.editNote(note._id)

  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  return (
    <>
      <div className="bg-lime-100 border-none rounded-md w-full p-2 shadow">
        <div className="flex justify-between ">
          <h2 className="p-2">{note.title}</h2>
          <div>
            <FontAwesomeIcon
              icon={faThumbTack}
              className="p-1 text-gray-600 cursor-pointer hover:text-gray-700"
            />
            <FontAwesomeIcon
              icon={faEdit}
              className="p-1 text-blue-500 cursor-pointer hover:text-blue-600" onClick={()=>navigate('/editnote')}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="p-1 text-red-600 cursor-pointer  hover:text-red-700"
              onClick={() => handleDelete(note._id)}
            />
          </div>
        </div>

        <hr />
        <p className="p-2">{note.description}</p>
      </div>
    </>
  );
};

export default Card;
