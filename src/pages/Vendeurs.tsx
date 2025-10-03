import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, Package, ShoppingCart, DollarSign, Phone } from "lucide-react";

export default function Vendeurs() {
  const vendeurs = [
    {
      name: "Artisanat Kofi",
      specialty: "Tissus et objets d'art",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3b?w=500",
      ventes: 145000,
      produits: 12,
      commandes: 23,
      note: 4.8,
      contact: "+221 77 123 45 67",
    },
    {
      name: "Poterie Ama",
      specialty: "Céramiques artisanales",
      image: "https://images.unsplash.com/photo-1596568353750-5d5b1f72e1b1?w=500",
      ventes: 98000,
      produits: 8,
      commandes: 15,
      note: 4.6,
      contact: "+221 76 987 65 43",
    },
    {
      name: "Marché Kwame",
      specialty: "Produits alimentaires locaux",
      image: "https://images.unsplash.com/photo-1572656638305-6f0bcae7f008?w=500",
      ventes: 125000,
      produits: 10,
      commandes: 19,
      note: 4.7,
      contact: "+221 70 456 78 90",
    },
    {
      name: "Art Ancestral",
      specialty: "Masques et sculptures africaines",
      image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=500",
      ventes: 112000,
      produits: 9,
      commandes: 17,
      note: 4.9,
      contact: "+221 78 345 67 89",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Section titre avec dégradé comme l'accueil */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white py-20 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Vendeurs Stars</h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Découvrez les vendeurs les plus performants et les mieux notés de la plateforme.
        </p>
      </section>

      {/* Liste des vendeurs */}
      <section className="container mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {vendeurs.map((v, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-800">{v.name}</h3>
              <p className="text-gray-500 mb-3">{v.specialty}</p>

              <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                <DollarSign className="w-4 h-4 text-orange-600" />
                <span>{v.ventes.toLocaleString()} FCFA de ventes</span>
              </div>

              <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                <Package className="w-4 h-4 text-orange-600" />
                <span>{v.produits} produits</span>
              </div>

              <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                <ShoppingCart className="w-4 h-4 text-orange-600" />
                <span>{v.commandes} commandes</span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
                <span className="font-semibold">{v.note} / 5</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-orange-600" />
                <span>{v.contact}</span>
              </div>
            </div>

            <div className="bg-orange-50 px-4 py-3 text-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                Voir la boutique
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Section motivation */}
      <section className="bg-orange-100 text-center py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Vous êtes artisan ou commerçant ?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Rejoignez notre marketplace et exposez vos produits à des milliers de clients à travers le Sénégal.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition">
          Devenir vendeur
        </button>
      </section>

      <Footer />
    </div>
  );
}