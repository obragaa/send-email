import React from 'react'
import './Home.css';
import Logo from '../../Assets/logo.png'
import GitLogo from '../../Assets/github-logo.svg'
import card1 from '../../Assets/img-cards/card-vidal.png'

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
                    {/* <img src={card1} alt=""/> */}

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
                    <p>Veja mais projetos de developers para explorar:</p>
                </div>

                <div className="cards2">

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                    <div className="card2">
                    </div>

                </div>
            </section>
            


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