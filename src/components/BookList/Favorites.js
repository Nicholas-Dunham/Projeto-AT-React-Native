// src/components/Favorites/Favorites.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.'; 
import Loading from "../Loader/Loader"; 
import coverImg from "../../images/cover_not_found.png"; // Imagem de capa padrão
import { FaArrowLeft } from 'react-icons/fa'; // Ícone para o botão de voltar
import Book from './Book'; // Ajuste o caminho conforme necessário
import "./Favorites.css";

const Favorites = () => {
  const navigate = useNavigate(); // Para navegar de volta
  const { loading, setResultTitle } = useGlobalContext();
  const [favoriteBooks, setFavoriteBooks] = useState([]); // Para armazenar os detalhes dos livros favoritos
  const { isDarkMode } = useGlobalContext();


  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];

      if (favoriteIds.length === 0) {
        setFavoriteBooks([]);
        setResultTitle("Nenhum favorito encontrado!");
        return;
      }

      try {
        const booksData = await Promise.all(favoriteIds.map(async (id) => {
          const response = await fetch(`https://openlibrary.org/works/${id}.json`);
          const data = await response.json();
          const { covers, authors, title, first_publish_year } = data;

          return {
            id,
            author: authors ? authors.map(author => author.name) : ["Autor desconhecido"], // Array de nomes de autores
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            title: title,
            first_publish_year: first_publish_year || "Ano desconhecido", // Deixe como está para formatação no componente Book
          };
        }));

        setFavoriteBooks(booksData);
        setResultTitle("Seus Livros Favoritos");
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavoriteBooks();
  }, [setResultTitle]);

  return (
    <section className={`book-details ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <div className='book-details-content'>
          <div className='title-cat flex'>
            <h2>Favoritos</h2>
            <button type='button' className='flex flex-c back-btn' onClick={() => navigate(-1)}> {/* Volta para a página anterior */}
              <FaArrowLeft size={22} />
              <span className='fs-18 fw-6'>Voltar</span>
            </button>
          </div>

          {loading ? <Loading /> : (
            <div className="book-list grid">
              {favoriteBooks.length > 0 ? (
                favoriteBooks.map((book) => (
                  <Book
                    key={book.id}
                    id={book.id}
                    cover_img={book.cover_img}
                    title={book.title}
                    author={book.author}
                    edition_count={book.edition_count}
                    first_publish_year={book.first_publish_year}
                  />
                ))
              ) : (
                <p>Nenhum livro favorito encontrado.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
