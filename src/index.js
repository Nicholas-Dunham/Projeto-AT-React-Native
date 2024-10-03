//app.js
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.'; // Contexto global
import './index.css'; // Arquivo de estilos
import './darkmode.css'; // Arquivo de estilos
import Home from './pages/Home/Home'; // Página inicial
import FavoritesPage from "./pages/Favoritos/FavoritesPage";  
import Categories from "./pages/Categories/Categories"; 
import Autores from "./pages/Autores/Autores"; 
import Livro from "./pages/Livro/Livro"; 
import BuscaTitulo from "./pages/BuscaTitulo/BuscaTitulo"; 
import AuthorCarousel from './components/AuthorCarousel/AuthorCarousel'; // Carrossel de autores

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/book" element={<BuscaTitulo />} />
        <Route path="/book/:id" element={<Livro />} />
        <Route path="/category/:tag" element={<Categories />} />
        <Route path="/authors" element={<AuthorCarousel />} /> {/* Rota para o carrossel de autores */}
        <Route path="/search/author/:author" element={<Autores />} /> {/* Busca por autor */}
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
