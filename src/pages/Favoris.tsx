// src/pages/Favoris.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeartOff } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function Favoris() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: "Tissu Kente Premium", price: 25000, image: "/images/robe.jpeg" },
    { id: 2, name: "Vase Céramique", price: 15000, image: "/images/montre.jpeg" },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ❤️ Mes Favoris
        </h1>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:text-red-600"
                >
                  <HeartOff className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <HeartOff className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Aucun produit dans vos favoris.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
