import React from 'react';
import { useGlobalContext } from '../../context.';
import { useNavigate } from 'react-router-dom';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.png";
import "./BookList.css";
import { FaArrowLeft } from 'react-icons/fa';

const BookList = () => {
  const navigate = useNavigate(); // Para navegar de volta
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  const { isDarkMode } = useGlobalContext();

  if(loading) return <Loading />;

  return (
    <section className={`booklist ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate(-1)}> {/* Volta para a página anterior */}
              <FaArrowLeft size={22} />
              <span className='fs-18 fw-6'>Voltar</span>
            </button>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList;