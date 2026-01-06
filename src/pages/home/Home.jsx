import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteForm from "../note/component/NoteForm";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
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

      {/* <Card/> */}
    </>
  );
};

export default Home;
