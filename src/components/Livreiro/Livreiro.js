import React from 'react';
import "./Livreiro.css";
import { useGlobalContext } from '../../context.'; 

const Header = () => {
  const { isDarkMode } = useGlobalContext();
  return (
    <div className={`holder ${isDarkMode ? 'dark' : 'light'}`}>
        <header className='header'>
            <div className='container'>
            <div className='header-content flex flex-c text-center text-white' id="faq">
              <div className='fundo'>
                <div className="tp" id="faq1" style={{ backgroundImage: `url(https://www.svgrepo.com/show/71814/typewriter.svg)` }}></div>
                <h3 className='header-title text-capitalize'>Conectando novas histórias</h3><br />
                <p className='header-text'>Atuamos na democratização da leitura, te ajudando a descobrir novas histórias!</p>
              </div>   
              <div className='fundo'>
                <div className="tp" id="faq2" style={{ backgroundImage: `url(https://www.svgrepo.com/show/473031/book-bookmark.svg)` }}></div>
                <h3 className='header-title text-capitalize'>Adicione seus favoritos</h3><br />
                <p className='header-text'>Ajudamos a salvar seus livros preferidos e interesses para não os perder de vista!</p>
              </div>
              <div className='fundo'>
                <div className="tp" id="faq3" style={{ backgroundImage: `url(https://www.svgrepo.com/show/339722/api.svg)` }}></div>
                <h3 className='header-title text-capitalize'>Open Library Search API</h3><br />
                <p className='header-text'>Encontre seus títulos favoritos no Livreiro através da API Open Library Search!</p>
              </div>
            </div>
            </div>
        </header>
    </div>
  )
}

export default Header


