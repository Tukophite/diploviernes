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
                    <h3>¡Tu fuente definitiva para estar al tanto de las últimas novedades en el apasionante universo del gaming! En este blog, nos sumergimos en el vertiginoso mundo de los videojuegos, explorando tanto los emocionantes eventos nacionales como las intrigantes noticias internacionales que dan forma a la industria.</h3>
                    <p>Aquí, no solo te mantenemos informado sobre los juegos más emocionantes y las tendencias del momento, sino que también te ofrecemos un vistazo exclusivo a los E-sports, donde los profesionales se enfrentan en competiciones épicas. Pero eso no es todo; nos adentramos en el fascinante universo de los launchers más destacados, como Steam, Epic Games, Riot Games, Ubisoft y el gaming pass de Xbox.</p>
                    <p>¿Listo para sumergirte en el corazón palpitante de la escena gamer? Únete a nosotros mientras recapitulamos, analizamos y compartimos las historias más emocionantes que dan forma al presente y futuro de la industria del gaming. ¡Prepárate para vivir la experiencia "Noticias Gaming" al máximo!</p>
                    </div>                           
        </main>
    );
}

export default HomePage;