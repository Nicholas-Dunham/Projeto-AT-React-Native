import React from 'react';
import Header from '../../components/Header/Header';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carousel/MainCarousel';
import BookDetails from "../../components/BookDetails/BookDetails";
import BookCarousel from "../../components/BookCarousel/BookCarousel";
import VideoSection from '../../components/VideoSection/VideoSection';

const Home = () => {
  const videoLinks1 = [
    "https://www.youtube.com/embed/eTFy8RnUkoU?si=TvyG05s4_cNCplfS",
    "https://www.youtube.com/embed/AUw7laSlcbo?si=Hi-f_NKlOTb642CF",
    "https://www.youtube.com/embed/muuWRKYi09s?si=QVj-3lHE7UzXueHU"
  ];

  return (
    <main>
        <Header />
        <Carrossel />

        <BookDetails />
        <Divider />
        <VideoSection title="Leia mais!" videoLinks={videoLinks1}/>
        <Divider />
        <BookCarousel />
        <Divider />
        <Footer />
    </main>
  )
}

export default Home
