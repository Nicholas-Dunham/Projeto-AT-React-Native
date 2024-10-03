// FavoriteService.js
export const FavoriteService = {
  // Função para obter os favoritos do localStorage
  getFavorites: () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  },

  // Função para adicionar um livro aos favoritos
  addFavorite: (id) => {
    const currentFavorites = FavoriteService.getFavorites();
    if (!currentFavorites.includes(id)) {
      const updatedFavorites = [...currentFavorites, id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  },

  // Função para remover um livro dos favoritos
  removeFavorite: (id) => {
    const currentFavorites = FavoriteService.getFavorites();
    const updatedFavorites = currentFavorites.filter(favId => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  },

  // Função para verificar se o livro está nos favoritos
  isFavorite: (id) => {
    const currentFavorites = FavoriteService.getFavorites();
    return currentFavorites.includes(id);
  }
};
