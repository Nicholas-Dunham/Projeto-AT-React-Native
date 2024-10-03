import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.'; 
import Loading from "../Loader/Loader"; 
import coverImg from "../../images/cover_not_found.png"; // Imagem de capa padrão
import { FaArrowLeft } from 'react-icons/fa'; // Ícone para o botão de voltar
import Book from '../BookList/Book'; // Ajuste o caminho conforme necessário
import "./Cards.css";

const BooksByAuthor = () => {
  const { author } = useParams(); // Pegando o nome do autor dos parâmetros da URL
  const navigate = useNavigate(); // Para navegar de volta
  const { books, loading, setBooks, setResultTitle } = useGlobalContext();
  const { isDarkMode } = useGlobalContext();

  useEffect(() => {
    const fetchBooksByAuthor = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?author=${author}`);
        const data = await response.json();
        const { docs } = data;

        if (docs) {
          const newBooks = docs.slice(0, 20).map((bookSingle) => {
            const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

            return {
              id: key.replace("/works/", ""),
              author: author_name ? author_name : [], // Array de nomes de autores
              cover_id: cover_i,
              cover_img: cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : coverImg,
              edition_count: edition_count,
              first_publish_year: first_publish_year, // Deixe como está para formatação no componente Book
              title: title,
            };
          });

          setBooks(newBooks);
          setResultTitle(`Livros de ${author}`);
        } else {
          setBooks([]);
          setResultTitle("Nenhum livro encontrado!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooksByAuthor();

  }, [author, setBooks, setResultTitle]);

  return (
    <section className={`book-details ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <div className='book-details-content'>
          <div className='title-cat flex'>
            <h2 className='author fs-18 fw-6'>{author}</h2>
            <button type='button' className='flex flex-c back-btn' onClick={() => navigate(-1)}> {/* Volta para a página anterior */}
              <FaArrowLeft size={22} />
              <span className='fs-18 fw-6'>Voltar</span>
            </button>
          </div>

          {loading ? <Loading /> : (
            <div className="book-list grid">
              {books.map((book) => (
                <Book
                  key={book.id}
                  id={book.id}
                  cover_img={book.cover_img}
                  title={book.title}
                  author={book.author}
                  edition_count={book.edition_count}
                  first_publish_year={book.first_publish_year}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BooksByAuthor;
