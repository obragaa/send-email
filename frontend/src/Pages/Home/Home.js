import React, {useState} from 'react';
import './Home.css';
import axios from 'axios';
import Logo from '../../Assets/logo.png';

function Home() {
    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        mensagem: '',
        anexo: ''
    });
    function handleInputChange(event){
      if(event.target.name === "anexo")
        campos[event.target.name] = event.target.files[0];
      else
        campos[event.target.name] = event.target.value;
      setCampos(campos);
    }
  
    function send(){
      const formData = new FormData();
      Object.keys(campos).forEach(key => formData.append(key, campos[key]));
      axios.post('http://localhost:3030/send', 
                formData,
                {
                  headers: {
                   "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                  }
                })
        .then(response => { console.log(response.data); })
    }
  
    function handleFormSubmit(event){ 
      event.preventDefault(); 
      console.log(campos); 
      send(campos);
    }

    return(
        <>
            <div className="container">
                <div className="fake-header">
                    <div className=" img-header">
                        <img src={Logo} alt="Logo" />
                    </div> 
                    <div className="menu">
                        <nav>
                            <ul className="nav-header">
                                <li><span>Home</span></li>
                                <li><span>Contato</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Nesta section falta adicionar os botões com link para a página e os prints de cada uma das mesmas. */}
            <section className="cards">
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Felipe // Page</h3>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Matheus // Page</h3>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Rebecca // Page</h3>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Victor // Page</h3>
                    </div>
                </div>
            </section>

            {/* Aqui haverão mais imagens de páginas que os devs fizeram, separadas por cards. */}
            <section className="model">
                <div className="info">
                    <p>DASDASDA</p>
                </div>

                <div className="cards2">
                    <div className="card2">

                    </div>
                    <div className="card2">
                        
                    </div>
                    <div className="card2">
                        
                    </div>
                </div>
            </section>
            
            <section className="form-section">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChange} />

                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={handleInputChange} />

                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={handleInputChange}></textarea>

                <label htmlFor="anexo">Anexo</label>
                <input type="file" id="anexo" name="anexo" onChange={handleInputChange} />

                <input type="submit" value="Enviar" />
            </form>
            </section> 


            <section className="footer">
                <div className="footer-title">
                    <h2>Desenvolvedores</h2>
                </div>
                <footer>
                    <ul className="footer-names">
                        <img src={Logo} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/obragaa"><span>Felipe Braga</span></a></li>

                        <img src={Logo} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/vidal987"><span>Matheus Vidal</span></a></li>

                        <img src={Logo} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/ramos-r"><span>Rebecca Ramos</span></a></li>

                        <img src={Logo} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/Victor846"><span>Victor Morais</span></a></li>
                    </ul>
                </footer>
            </section>
        </>
    );
}

export default Home;