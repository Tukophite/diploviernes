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
                    <h2>Bienvenidos</h2>
                    <p>Lorem</p>
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