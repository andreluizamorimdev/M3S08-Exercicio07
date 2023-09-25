import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App(){
  const  [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/usuarios")
      .then(response => {
        console.log("Dados resposta: ", response.data);
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Erro na requisição: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Usuários do Sistema</h1>
      <ul>{usuarios.map(usuario => {
        return <li key={usuario.id}>{usuario.nome}</li>
      })}</ul>
    </div>
  );
}

export default App;