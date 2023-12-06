// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/videojuegos" className={({isActive}) => isActive ? "activo" : undefined}>VideoJuegos</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                    <li><NavLink to="/Novedades" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;
