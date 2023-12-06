import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
const Login = () => {

    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    }

return (
    <form onSubmit={handleSubmit}>
      <div className='usuario'>
      <div>
        <label>Usuario:</label>
        <input className='input' type="text" placeholder='User' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input className='input' type="password" placeholder='Pass' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Iniciar Sesión</button>
      </div>
      <div>
      <NavLink to="/reset-password">Reset Password</NavLink>  
      </div>
    </form>
  );
};


export default Login;