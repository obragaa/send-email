import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino..."/>

        {/* Antes 'nome', agora chamamos esta label de 'assunto'. */}
        <label htmlFor="assunto">Assunto</label>
        <input type="text" id="assunto" name="assunto" placeholder="Assunto..."/>

        <label htmlFor="mensagem">Mensagem</label>
        <input type="text" id="mensagem" name="mensagem" placeholder="Mensagem..."/>
      </form>
    </div>
  );
}

export default App;
