import React, {Fragment} from 'react'
import './Home.css';

function Home() {
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
            {/* Este container terá as imagens de modelos de páginas criadas por nós, e a exibição das principais páginas e botão com link para as mesmas. */}
            <div className="container"></div>
            <footer>
                <ul>
                    <img src="./Componentes/img/github-logo.png"></img><li><a>Felipe Braga</a></li>
                    <img src="./Componentes/img/github-logo.png"></img><li><a>Matheus Vidal</a></li>
                    <img src="./Componentes/img/github-logo.png"></img><li><a>Rebecca Ramos</a></li>
                    <img src="./Componentes/img/github-logo.png"></img><li><a>Victor Morais</a></li>
                </ul>
            </footer>
        </Fragment>
    );
}

export default Home;