import "../Styles/Components/Layout/Pages/ContactoPage.css"
import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name="" />
                    </p>
                    <p class="acciones"><input type="sumbit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactase con nosotros usnado los siguientes medios</p>
                <ul>
                    <li>Telefono: 3815801228</li>
                    <li>Email: contacto@Transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>X:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;