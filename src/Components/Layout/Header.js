import { NavLink } from "react-router-dom";

const Header = (props) =>{
    return(
        <header>
            <div>
            <div className="holder"/>
            <img src="Images/sitiogaming/Unnamed.webp" width="100" alt="Transportes X" />
            <h1>Noticias Gaming</h1>
            </div>
            <div className="login">
            <button className="button"><NavLink to="/login">Login</NavLink></button>
            <button className="button"><NavLink to="/register">Register</NavLink></button>                          
            </div>
        </header>
        )
}

export default Header;
