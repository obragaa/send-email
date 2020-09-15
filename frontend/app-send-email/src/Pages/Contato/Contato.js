import React, { Fragment } from 'react';

function Contato(){
    return(
        <Fragment>
        <header>
            <img src="./Componentes/img/logo.png" alt=""></img>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contato</li>
                </ul>   
            </nav>
        </header>
        <div className="container">
            <form>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" placeholder="E-mail de destino..."/>

            {/* Antes definida como 'nome', agora chamamos esta label de 'assunto'. */}
                <label htmlFor="assunto">Assunto</label>
                <input type="text" id="assunto" name="assunto" placeholder="Assunto..."/>

               <label htmlFor="mensagem">Mensagem</label>
               <input type="text" id="mensagem" name="mensagem" placeholder="Mensagem..."/>
            </form>
        </div>
    </Fragment>
    )
}
