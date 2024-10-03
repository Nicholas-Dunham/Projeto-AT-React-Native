import React from 'react';
import Header from '../../components/Header/Header';
import Favorites from '../../components/BookList/Favorites';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carousel/MainCarousel';
import VideoSection from '../../components/VideoSection/VideoSection';


const FavoritesPage = () => {
  const videoLinks1 = [
    "https://www.youtube.com/embed/eTFy8RnUkoU?si=TvyG05s4_cNCplfS",
    "https://www.youtube.com/embed/AUw7laSlcbo?si=Hi-f_NKlOTb642CF",
    "https://www.youtube.com/embed/muuWRKYi09s?si=QVj-3lHE7UzXueHU"
  ];
  const videoLinks2 = [
    "https://www.youtube.com/embed/AATMu6lBouE?si=LqunLg7Aw2PhcesJ",
    "https://www.youtube.com/embed/wXpQMzrkMM0?si=vTon6NHztMJbiO6u",
    "https://www.youtube.com/embed/3A2IzU9mSVo?si=ET-4WrtiEKC4B7DO"
  ];
  return (
    <main>
        <Header />
        <Carrossel />
        
        <Favorites />
        <Divider />
        <VideoSection title="Leia mais!" videoLinks={videoLinks1}/>
        <Divider />
        <VideoSection title="Recomendações do Livreiro!" videoLinks={videoLinks2}/>
        <Divider />
        <Footer />
    </main>
  );
}

export default FavoritesPage;