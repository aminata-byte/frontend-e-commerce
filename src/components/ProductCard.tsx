import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Charger l’état du produit au démarrage
  useEffect(() => {
    const favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    setIsFavorite(favoris.some((item: any) => item.id === id));
  }, [id]);

  // ❤️ Ajouter ou retirer un favori
  const toggleFavori = () => {
    const favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    let updatedFavoris;

    if (isFavorite) {
      updatedFavoris = favoris.filter((item: any) => item.id !== id);
    } else {
      updatedFavoris = [...favoris, { id, name, price, image }];
    }

    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
    setIsFavorite(!isFavorite);
  };

  // 🛒 Ajouter au panier
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Produit ajouté au panier 🛒");
  };

  return (
    <div className="relative card bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
      {/* ❤️ Bouton favori */}
      <button
        onClick={toggleFavori}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <Heart
          className={`w-5 h-5 transition ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      <Link to={`/produit/${id}`} className="block">
        <figure>
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover rounded-t-2xl"
          />
        </figure>

        <div className="card-body text-center">
          <h2 className="font-semibold text-gray-800">{name}</h2>
          <p className="text-orange-600 font-bold">
            {price.toLocaleString()} FCFA
          </p>
          <div className="card-actions justify-center mt-2">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Ajouter au panier
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
