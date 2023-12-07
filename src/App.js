import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Auth/Login"
import Register from './Components/Auth/Register';
import ResetPassword from './Components/Auth/ResetPassword';

import Header from "./Components/Layout/Header";
import Nav from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";


import ContactoPage from "./Pages/ContactoPage";
import HomePage from "./Pages/Homepage";
import VideojuegosPage from "./Pages/VideojuegosPage";
import NovedadesPage from "./Pages/NovedadesPage";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

      <Nav />
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/videojuegos" element={<VideojuegosPage />} />
        <Route  path="/novedades" element={<NovedadesPage />} />
        <Route  path="/contacto" element={<ContactoPage />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/reset-password" element={<ResetPassword />} />
      </Routes>   
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
