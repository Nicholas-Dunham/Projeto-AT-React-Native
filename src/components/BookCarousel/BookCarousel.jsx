import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.'; // Importa o contexto global para alterar o termo de busca
import nyTimesBestSellers from '../../data/nyTimesBestSellers';
import './BookCarousel.css';

const URL = "https://openlibrary.org/search.json?title=";

const BookCarousel = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext(); // Obtém os setters do contexto global
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const { isDarkMode } = useGlobalContext();


  // Função para buscar os dados da API do OpenLibrary
  const fetchBooks = async () => {
    try {
      const fetchedBooks = await Promise.all(
        nyTimesBestSellers.map(async (title) => {
          const response = await fetch(`${URL}${title}`);
          const data = await response.json();
          const book = data.docs[0]; // Pega o primeiro resultado da busca
          
          if (book) {
            return {
              title: book.title,
              author: book.author_name ? book.author_name[0] : "Autor Desconhecido", // Adiciona o autor
              cover_id: book.cover_i, // ID da capa
              first_publish_year: book.first_publish_year, // Ano de publicação
            };
          }
          return { title }; // Caso não encontre o livro, retorna apenas o título
        })
      );
      setBooks(fetchedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks(); // Chama a função de busca ao montar o componente
  });
  

  // Função que realiza a busca com o título do livro clicado
  const handleBookClick = (bookTitle) => {
    setSearchTerm(bookTitle); // Define o termo de busca com o título do livro
    setResultTitle(`Resultados para "${bookTitle}"`); // Define o título do resultado
    navigate("/book"); // Navega para a página de resultados
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className={`book-carousel ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <h2 className="carousel-title">NY Best Sellers 10/2024</h2>
        <Slider {...settings}>
          {books.map((book, index) => (
            <div
              key={index}
              className="book-card"
              onClick={() => handleBookClick(book.title)} // Ao clicar, chama handleBookClick com o título
            >
              <img
                src={book.cover_id 
                  ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` 
                  : "https://www.nipponniche.com/wp-content/uploads/2021/04/fentres-pdf.jpeg"}
                alt={`Capa do livro ${book.title}`}
                className="book-cover"
              />
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p> {/* Autor adicionado */}
              {book.first_publish_year && (
                <p className="year">{book.first_publish_year}</p> /* Ano de publicação */
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BookCarousel;
