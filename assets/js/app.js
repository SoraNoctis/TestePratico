import React from 'react';
import { Input } from '@fluentui/react';

function App() {
  return (
    <div className="App">
      <h1>Meu Site</h1>
      <Input placeholder="Digite algo aqui..." />
    </div>
  );
}

export default App;

document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Pegue os valores dos campos do formulário
    // Faça uma requisição POST para o servidor
    // Atualize a tabela de contatos
});

// Adicione funções para lidar com as operações de UPDATE e DELETE
