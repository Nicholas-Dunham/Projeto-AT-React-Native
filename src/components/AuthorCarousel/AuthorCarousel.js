import React from 'react';
import Slider from 'react-slick'; // Importa o slider do react-slick
import { useNavigate } from 'react-router-dom';
import "./AuthorCarousel.css"; // Crie um arquivo de estilo para o carrossel
import { useGlobalContext } from '../../context.'; 
// Importando as imagens
import pedroBandeira from "../../images/authors/pedro-bandeira.jpg";
import conceicaoEvaristo from "../../images/authors/conceicao-evaristo.jpg";
import machadoDeAssis from "../../images/authors/machado-de-assis.jpg";
import clariceLispector from "../../images/authors/clarice-lispector.jpg";
import gracilianoRamos from "../../images/authors/graciliano-ramos.jpg";
import virginiaWoolf from "../../images/authors/virginia-woolf.jpg";
import joseSaramago from "../../images/authors/jose-saramago.jpg";
import carlaMadeira from "../../images/authors/carla-madeira.jpg";
import michelFoucault from "../../images/authors/michel-foucault.jpg";
import carolinaMariaDeJesus from "../../images/authors/carolina-maria-de-jesus.jpg";
import gabrielGarciaMarquez from "../../images/authors/gabriel-garcia-marquez.jpg";
import coollenHoover from "../../images/authors/coollen-hoover.jpg";
import guimaraesRosa from "../../images/authors/guimaraes-rosa.jpg";
import lygiaFagundesTelles from "../../images/authors/lygia-fagundes.jpg";
import georgeOrwell from "../../images/authors/geroge-orwell.jpg";
import hildaHilst from "../../images/authors/hilda-hilst.jpg";
import jorgeAmado from "../../images/authors/jorge-amado.jpg";
import isabelAllende from "../../images/authors/isabel-allende.jpg";
import itamarVieiraJunior from "../../images/authors/itamar-vieira-junior.jpg";

const AuthorCarousel = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useGlobalContext();
  const authors = [
    { name: "Pedro Bandeira", image: pedroBandeira },
    { name: "Conceição Evaristo", image: conceicaoEvaristo },
    { name: "Machado de Assis", image: machadoDeAssis },
    { name: "Clarice Lispector", image: clariceLispector },
    { name: "Graciliano Ramos", image: gracilianoRamos },
    { name: "Virginia Woolf", image: virginiaWoolf },
    { name: "José Saramago", image: joseSaramago },
    { name: "Carla Madeira", image: carlaMadeira },
    { name: "Michel Foucault", image: michelFoucault },
    { name: "Carolina de Jesus", image: carolinaMariaDeJesus },
    { name: "Gabriel G. Marquez", image: gabrielGarciaMarquez },
    { name: "Coollen Hoover", image: coollenHoover },
    { name: "Guimarães Rosa", image: guimaraesRosa },
    { name: "Lygia F. Telles", image: lygiaFagundesTelles },
    { name: "George Orwell", image: georgeOrwell },
    { name: "Hilda Hilst", image: hildaHilst },
    { name: "Jorge Amado", image: jorgeAmado },
    { name: "Isabel Allende", image: isabelAllende },
    { name: "Itamar Vieira Junior", image: itamarVieiraJunior }
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 7, // Exibe 7 autores por slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Para telas menores
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024, // Para tablets
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  };
  

  const handleAuthorClick = (author) => {
    navigate(`/search/author/${encodeURIComponent(author.name)}`);
  };

  return (
    <section className={`author-carousel ${isDarkMode ? 'dark' : 'light'}`}>
    <div className='container'>
      <h2 className="carousel-title">Autores Recomendados</h2>
      <Slider {...settings}>
        {authors.map((author, index) => (
          <div key={index} className="author-card" onClick={() => handleAuthorClick(author)}>
            <img
              src={author.image}
              alt={`Foto de ${author.name}`}
              className="author-image"
            />
            <h3>{author.name}</h3>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default AuthorCarousel;
