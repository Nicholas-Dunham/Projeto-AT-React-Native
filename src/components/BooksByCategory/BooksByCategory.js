import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.'; 
import Loading from "../Loader/Loader"; 
import categories from '../../data/categories';
import coverImg from "../../images/cover_not_found.png"; 
import { FaArrowLeft } from 'react-icons/fa'; 
import Book from '../BookList/Book'; 
import "./Categories.css";

const BooksByCategory = () => {
  const { tag } = useParams(); 
  const navigate = useNavigate(); 
  const category = categories.find(cat => cat.tag === tag) || categories[0];
  const { books, setBooks, setResultTitle } = useGlobalContext();
  const { isDarkMode } = useGlobalContext();

  // Estado de loading local
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooksByCategory = async () => {
      setLoading(true); // Começa o carregamento
      try {
        const response = await fetch(`https://openlibrary.org/subjects/${category.tag}.json`);
        const data = await response.json();
        const { works } = data;

        if (works) {
          const newBooks = works.slice(0, 20).map((bookSingle) => {
            const { key, authors, cover_id, edition_count, first_publish_year, title } = bookSingle;

            return {
              id: key.replace("/works/", ""),
              author: authors ? authors.map(author => author.name) : [], 
              cover_id: cover_id,
              cover_img: cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : coverImg,
              edition_count: edition_count,
              first_publish_year: first_publish_year,
              title: title,
            };
          });

          setBooks(newBooks);
          setResultTitle(`Livros de ${category.name}`);
        } else {
          setBooks([]);
          setResultTitle("Nenhum livro encontrado!");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchBooksByCategory();

  }, [category, setBooks, setResultTitle]);

  return (
    <section className={`book-details ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <div className='book-details-content'>
        <div className='title-cat flex'>
        <h2>{category.name}</h2>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate(-1)}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Voltar</span>
        </button>
        </div>
          {loading ? ( // Exibe o loader enquanto está carregando
            <Loading /> 
          ) : (
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

export default BooksByCategory;
