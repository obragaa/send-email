import React, {useState} from 'react'
import axios from 'axios';
import './Home.css';
import Logo from '../../Assets/logo.png'
import GitLogo from '../../Assets/github-logo.svg'
import card1 from '../../Assets/img-cards/card-vidal.png'
import card2 from '../../Assets/img-cards/card-felipe.png'
import card3 from '../../Assets/img-cards/card-rebecca.png'
import card4 from '../../Assets/img-cards/card-victor.png'
import img1 from '../../Assets/img-cards/Awwwards.png'
import img2 from '../../Assets/img-cards/Behance.png'
import img3 from '../../Assets/img-cards/Coder.png'
import img4 from '../../Assets/img-cards/Habitica.png'
import img5 from '../../Assets/img-cards/LouisVuitton.png'
import img6 from '../../Assets/img-cards/McDonalds.png'
import img7 from '../../Assets/img-cards/Rocketseat.png'
import img8 from '../../Assets/img-cards/Rubi.png'
import img9 from '../../Assets/img-cards/StudioBrunner.png'
import img10 from '../../Assets/img-cards/Vogue.png'

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
                    <img src={card2} alt="card-felipe"/>

                    <div className="title">
                        <h3>Felipe Duarte</h3>
                    </div>
                </div>

                <div className="card">
                    <img src={card1} alt="card-vidal"/>

                    <div className="title">
                        <h3>Matheus Vidal</h3>
                    </div>
                </div>

                <div className="card">
                    <a href="https://ramos-r.github.io/workshop-react-pokedex/">
                        <img src={card3} alt="card-rebecca"/>
                    </a>

                    <div className="title">
                        <h3>Rebecca Ramos</h3>
                    </div>
                </div>

                <div className="card">
                    <img src={card4} alt="card-victor"/>

                    <div className="title">
                        <h3>Victor Bhering</h3>
                    </div>
                </div>
            </section>

            {/* Aqui haverão mais imagens de páginas que os devs fizeram, separadas por cards. */}
            <section className="model">
                <div className="info">
                    <p>Veja mais projetos de developers para explorar:</p>
                </div>

                <div className="cards2">

                    <div className="card2">
                        <a href="https://www.awwwards.com/">
                            <img src={img1} alt="Awwwards.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://www.behance.net/galleries">
                            <img src={img2} alt="Behance.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://coder.com/">
                            <img src={img3} alt="Coder.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://habitica.com/static/home">
                            <img src={img4} alt="Habitica.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://br.louisvuitton.com/por-br/homepage">
                            <img src={img5} alt="LouisVuitton.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://www.mcdonalds.com.br/">
                            <img src={img6} alt="McDonalds.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://rocketseat.com.br/">
                            <img src={img7} alt="Rocketseat.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://www.lojasrubi.com.br/">
                            <img src={img8} alt="Rubi.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://www.studiobrunner.com/">
                            <img src={img9} alt="StudioBrunner.png" className=""/>
                        </a>
                    </div>

                    <div className="card2">
                        <a href="https://www.vogue.pt/">
                            <img src={img10} alt="Vogue.png" className=""/>
                        </a>
                    </div>

                </div>
            </section>
            
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

            <section className="footer">
                <div className="footer-title">
                    <h2 id="h2-footer">Desenvolvedores</h2>
                </div>
                <footer>
                    <ul className="footer-names">
                        <img src={GitLogo} alt="Logo-Logo" className="img-footer"/>
                        <li><a href="https://Logo.com/obragaa"><span>Felipe Braga</span></a></li>

                        <img src={GitLogo} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/vidal987"><span>Matheus Vidal</span></a></li>

                        <img src={GitLogo} alt="Logo-Logo" className="img-footer"/>
                        <li><a href="https://Logo.com/ramos-r"><span>Rebecca Ramos</span></a></li>

                        <img src={GitLogo} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/Victor846"><span>Victor Morais</span></a></li>
                    </ul>
                </footer>
            </section>
        </>
    );
}

export default Home;