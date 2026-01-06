import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar'
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/home/Home';
import From from './pages/auth/component/Form';
import CreateNote from './pages/note/CreateNote';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form" element={<From />} />
          <Route path="/createnote" element={<CreateNote/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App
