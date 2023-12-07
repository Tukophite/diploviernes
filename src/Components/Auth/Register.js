import React, { useState } from 'react';


const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const handleSubmit = (event) => {
      event.preventDefault();
  

      console.log('Usuario:', username);
      console.log('Correo electrónico:', email);
      console.log('Contraseña:', password);
  
      // También podrías realizar la redirección a otra página o mostrar un mensaje de éxito/error
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='register'>
        <div>
          <label>Usuario:</label>
          <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input className='input' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Registrarse</button>
        </div>
      </form>
    );
  };
  


export default Register;