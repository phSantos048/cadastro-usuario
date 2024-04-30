import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    username: '',
    passworld: '',
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/cadastro', novoUsuario);
      setNovoUsuario({
        username: '',
        passworld: '',
      });
    } catch (error) {
      console.error('Erro ao criar usuario:', error);
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };
  
  const irPara= useNavigate();
  const handleClick = () => {
    irPara("/");
  };
  return (
    <div>
      <h1>Página de Cadastro</h1>  
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={novoUsuario.username}
        onChange={handleInputChange}
      />
      <input
        type="passworld"
        name="passworld"
        placeholder="Passworld"
        value={novoUsuario.passworld}
        onChange={handleInputChange}
      />
      <button type="submit">Cadastrar Usuário</button>
    </form>
    
      <button onClick={handleClick}>Voltar</button>
    </div>
  );
}
export default Cadastro;