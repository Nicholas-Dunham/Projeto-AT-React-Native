import React from 'react';
import Header from '../../components/Header/Header';
import Carrossel from '../../components/Carousel/MainCarousel';
import Livreiro from '../../components/Livreiro/Livreiro';
import VideoSection from '../../components/VideoSection/VideoSection';
import Autores from '../../components/AuthorCarousel/AuthorCarousel';
import CarrLivros from '../../components/BookCarousel/BookCarousel';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  const videoLinks1 = [
    "https://www.youtube.com/embed/eTFy8RnUkoU",
    "https://www.youtube.com/embed/AUw7laSlcbo",
    "https://www.youtube.com/embed/muuWRKYi09s"
  ];

  const videoLinks2 = [
    "https://www.youtube.com/embed/AATMu6lBouE",
    "https://www.youtube.com/embed/wXpQMzrkMM0",
    "https://www.youtube.com/embed/3A2IzU9mSVo"
  ];

  return (
    <main>
        <Header />
        
        <Carrossel />
        <Divider /> 

        <VideoSection title="Leia mais!" videoLinks={videoLinks1}/>
        <Divider /> 
        
        <Autores />
        <Divider /> 

        <CarrLivros />
        <Divider /> 

        <Livreiro />
        <Divider /> 

        <VideoSection title="Recomendações do Livreiro!" videoLinks={videoLinks2}/>
        <Divider />
        <Footer />
    </main>
  )
}

export default Home;
