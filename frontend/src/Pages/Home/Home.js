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

            <section className="cards">
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Pokedex</h3>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Pokedex</h3>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt=""/>

                    <div className="title">
                        <h3>Pokedex</h3>
                    </div>
                </div>
            </section>


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

        </>
    );
}

export default Home;