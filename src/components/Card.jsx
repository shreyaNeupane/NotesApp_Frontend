import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  faThumbTack } from '@fortawesome/free-solid-svg-icons';
import NoteService from "../pages/services/NoteService";

const Card = () => {
  // const data = {title,desciption}
  // const res = NoteService.createNote(data)
  // console.log(res)
  return (
    <>
      <div className="bg-lime-100 border-none w-md p-5  ">
        <div className="flex justify-between ">
          <h2>title</h2>

          <FontAwesomeIcon icon={faThumbTack} className="" />
        </div>

        <hr />
        <p className="p-2">
          {}
        </p>
      </div>
    </>
  );
};

export default Card;
