import "../Styles/Components/Layout/Pages/HomePage.css"
import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="Images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas"></div>
                <div className="bienvenidos">
                    <h2>Bienvenidos a Noticias Gaming</h2>
                    <p>En este blog se suben contenidos sobre noticias de: Videojuegos, E-Sports y Novedades sobre el Gaming </p>
                    <p>Lorem</p>
                    </div>
                    <div className="testimonios"></div>
                        <h2>Testimonios</h2>
                        <div className="testimonio"></div>
                            <span class="cita" > Simplemente Exclente </span>
                            <span class="autor"> Juan Perez - zapatos.com </span>
                                
        </main>
    );
}

export default HomePage;