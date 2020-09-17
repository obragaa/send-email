import React from 'react'
import './Home.css';
import Logo from '../../Assets/logo.png'

function Home() {
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
            {/* Seção do Form, falta terminar e preencher como no exemplo do professor.
            
            <section className="form-section">
                <div className="form">
                    <form>
                        <label></label>
                        <input></input>
                    </form>
                </div>
            </section> */}
            <section className="footer">
                <div className="footer-title">
                    <h2>Desenvolvedores</h2>
                </div>
                <footer>
                    <ul className="footer-names">
                        <img src={GitHub} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/obragaa"><span>Felipe Braga</span></a></li>

                        <img src={GitHub} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/vidal987"><span>Matheus Vidal</span></a></li>

                        <img src={GitHub} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/ramos-r"><span>Rebecca Ramos</span></a></li>

                        <img src={GitHub} alt="Github-Logo" className="img-footer"/>
                        <li><a href="https://github.com/Victor846"><span>Victor Morais</span></a></li>
                    </ul>
                </footer>
            </section>
        </>
    );
}

export default Home;