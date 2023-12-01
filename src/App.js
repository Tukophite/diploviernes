import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Nav from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";


import ContactoPage from "./Pages/ContactoPage";
import HomePage from "./Pages/Homepage";
import NosotrosPage from "./Pages/NosotrosPage";
import NovedadesPage from "./Pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
      <Nav />
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/nosotros" element={<NosotrosPage />} />
        <Route  path="/novedades" element={<NovedadesPage />} />
        <Route  path="/contacto" element={<ContactoPage />} />
      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
