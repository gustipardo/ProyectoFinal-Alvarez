import React, { useState } from 'react';
import './CheckOut.css'; 

const OrderForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderCode, setOrderCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderCode = generateOrderCode();

    setOrderCode(orderCode);
    clearForm();
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
  };

  const generateOrderCode = () => {

    const date = new Date();
    const code = date.getTime().toString();
    return code;
  };

  return (
    <div className="container"> 
      <h2>Formulario de Orden</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Número de Teléfono:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Generar Orden</button>
      </form>
      {orderCode && (
        <div className="generated-code"> 
          <h3>Código de Orden Generado:</h3>
          <p>{orderCode}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
