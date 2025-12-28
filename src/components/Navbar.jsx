import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between text-center p-5 bg-lime-600">
        <div className="logo ml-5">
          <Link to="/" className="text-xl">
            NotesApp
          </Link>
        </div>
        <div className="login mr-5">
          <Link to="/register" className="text-l mr-5">
            SIGN UP
          </Link>
          <Link to="/login" className="text-l">
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar
