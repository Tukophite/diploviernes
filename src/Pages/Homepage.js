import "../Styles/Components/Layout/Pages/HomePage.css"
import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="Images/sitiogaming/fotohome.jpg" width={600} height={400} alt="joystick" />
            </div>
            <div className="columnas"></div>
                <div className="bienvenidos">
                    <h2>Bienvenidos a Noticias Gaming</h2>
                    <h3>En este blog se suben contenidos sobre noticias de: Videojuegos, E-Sports y Novedades sobre el Gaming </h3>
                    <p>Recapitulamos informacion y noticias tanto nacionales como internacionale, manejandonos en el mundo de gaming, E-sports, noticias en launchers como steam, Epic Games, Riot Games, Ubisoft o el gaming pass de Xbox,</p>
                    <p>Tambien buscamos informaciones para ayudar a la gente a tener upgrades de pcs, ya sea en ofertas por MarketPlace de Facebook o de Mercado Libre</p>
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