import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { ShoppingBag, Shirt, Smartphone, Watch } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = [
    { name: "Vêtements", icon: <Shirt className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
    { name: "Électroniques", icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
    { name: "Accessoires", icon: <Watch className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
    { name: "Sacs", icon: <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
  ];

  const products = [
    { id: 1, name: "Robe en coton", price: 8000, image: "/images/robe.jpeg" },
    { id: 2, name: "Montre connectée", price: 25000, image: "/images/montre.jpeg" },
    { id: 3, name: "Smartphone X10", price: 120000, image: "/images/phone.jpeg" },
  ];

  const sellers = [
    {
      name: "Artisanat Kofi",
      specialty: "Tissus et objets d'art",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3b?w=500",
    },
    {
      name: "Poterie Ama",
      specialty: "Céramiques artisanales",
      image: "https://images.unsplash.com/photo-1596568353750-5d5b1f72e1b1?w=500",
    },
    {
      name: "Marché Kwame",
      specialty: "Produits alimentaires locaux",
      image: "https://images.unsplash.com/photo-1572656638305-6f0bcae7f008?w=500",
    },
    {
      name: "Art Ancestral",
      specialty: "Masques et sculptures africaines",
      image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=500",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Bannière d'accueil */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white text-center py-16 sm:py-20 lg:py-24 mt-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Bienvenue sur PolyMarket 🎉
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
            Achetez local, soutenez les vendeurs de votre région et découvrez des produits uniques de qualité !
          </p>
          <Link
            to="/produits"
            className="inline-block bg-white text-orange-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Découvrir les produits
          </Link>
        </div>
      </section>

      {/* Promotions */}
      <section className="bg-yellow-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">
            Promotions du moment
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12">
            Profitez des meilleures offres sur nos produits populaires !
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((p) => (
              p.price < 10000 && (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                />
              )
            ))}
          </div>
        </div>
      </section>

      {/* Catégories principales */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
            Catégories principales
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-2 sm:mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-center">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits populaires */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">
            Produits populaires
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12">
            Découvrez les produits les plus appréciés par nos clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Section des vendeurs */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">
            Nos Vendeurs Stars
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12">
            Découvrez les vendeurs les plus populaires de la plateforme, réputés pour la qualité de leurs produits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sellers.map((seller, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1">
                    {seller.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{seller.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}