import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const { isDarkMode } = useGlobalContext();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("O Cortiço");
      setResultTitle("Digite sua busca aqui ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className={`search-form ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='Digite sua busca aqui ...' ref = {searchText} required/>
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <div className='circle'><FaSearch className='pesquisa' size = {32} /></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm