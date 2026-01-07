import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteForm from "../note/component/NoteForm";
import { Link, useNavigate } from "react-router-dom";
import NoteService from "../services/NoteService";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await NoteService.getNote();
        setNotes(res.data.note);
        console.log(res.data.note);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-end m-3">
        <button
          onClick={() => navigate("/createNote")}
          className="bg-lime-600 font-semibold p-2 border-none rounded-md "
        >
          Create Note <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Card key={note._id} note={note} />
        ))}
      </div>
    </>
  );
};

export default Home;
