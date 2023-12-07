import React, { useState } from 'react';


const ResetPassword = () => {


  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();


    console.log('Correo Electrónico para restablecer la contraseña:', email);

    // También podrías realizar la redirección a otra página o mostrar un mensaje de éxito/error
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Correo Electrónico:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className="resetp" type="submit">Restablecer Contraseña</button>
    </form>
  );
};



export default ResetPassword;