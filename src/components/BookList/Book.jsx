import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Books.css";
import { FavoriteService } from './FavoriteService';
import { useGlobalContext } from '../../context.'; 

const Book = ({ id, cover_img, title, author, edition_count, first_publish_year }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { isDarkMode } = useGlobalContext();

  useEffect(() => {
    setIsFavorite(FavoriteService.isFavorite(id));
  }, [id]);

  // Função para lidar com o clique no botão de favoritos
  const handleFavoriteClick = () => {
    if (isFavorite) {
      FavoriteService.removeFavorite(id);
    } else {
      FavoriteService.addFavorite(id);
    }
    setIsFavorite(!isFavorite); // Atualiza o estado local
  };

  // Função para truncar um nome longo, exibindo apenas o primeiro e o último nome
  const shortenName = (name) => {
    if (typeof name !== 'string' || name.length === 0) {
      return "Autor desconhecido";
    }
    
    if (name.length > 19) {
      const nameParts = name.split(' ');
      if (nameParts.length > 1) {
        return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`; // Exibe o primeiro e o último nome
      }
    }
    return name; // Retorna o nome completo se for curto
  };

  // Limita a exibição de autores
  const formatAuthors = (authors) => {
    if (!Array.isArray(authors) || authors.length === 0) {
      return "Autor desconhecido"; // Retorna um valor padrão se os autores forem inválidos
    }
  
    const validAuthors = authors.filter(author => typeof author === 'string'); // Garante que todos os autores são strings
    if (validAuthors.length === 0) {
      return "Autor desconhecido";
    }
  
    const shortenedAuthors = validAuthors.map(shortenName);
    const joinedAuthors = shortenedAuthors.join(", ");
  
    if (joinedAuthors.length > 20) {
      return `${shortenedAuthors[0]}...`; // Exibe o primeiro autor seguido de reticências
    }
  
    return joinedAuthors; // Retorna a lista completa se for curta o suficiente
  };

  // Função para truncar o título mantendo as palavras completas
  const shortenTitle = (title, maxLength = 30) => {
    if (typeof title !== 'string') return "";
    if (title.length <= maxLength) {
      return title;
    }
    const words = title.split(' ');
    let truncatedTitle = '';

    for (const word of words) {
      // +1 para considerar o espaço entre as palavras
      if ((truncatedTitle + word).length + 1 > maxLength) break;
      truncatedTitle += `${word} `;
    }

    return `${truncatedTitle.trim()}...`;
  };

  // Função para extrair apenas o ano numérico
  const extractYear = (yearInput) => {
    if (!yearInput) return "Ano desconhecido";

    // Se for um número, retorna diretamente
    if (typeof yearInput === 'number') {
      return yearInput.toString();
    }

    // Se for uma string, tenta extrair o ano com regex
    if (typeof yearInput === 'string') {
      const yearMatch = yearInput.match(/\b\d{4}\b/); // Procura por exatamente quatro dígitos
      return yearMatch ? yearMatch[0] : "Ano desconhecido";
    }

    return "Ano desconhecido";
  };

  const authorNames = formatAuthors(author);
  const formattedTitle = shortenTitle(title, 40); // Ajuste o maxLength conforme necessário
  const formattedYear = extractYear(first_publish_year);

  return (
    <div className={`minip ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="mg">
        <div className="clr"><button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={handleFavoriteClick}>
        {isFavorite ? '★ Remover dos Favoritos' : '☆ Adicionar aos Favoritos'}
      </button></div>
        <div className="group">
          <span>{authorNames}</span>
        </div>
      </div>
      <div className="av" style={{ backgroundImage: `url(${cover_img})` }}></div>
      <div className="info">
        <div className="title">{formattedTitle}</div>
        <div className="deets">
          1° Publicação: {formattedYear}
        </div>
      </div>
      <Link className="plot" to={`/book/${id}`}>
        Ver detalhes →
      </Link>
      
    </div>
  );
};

export default Book;
