import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Clock, Percent, Tag } from "lucide-react";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Artisanat -30%",
      description: "Réduction sur tous les produits d'artisanat traditionnel",
      discount: "30%",
      endDate: "2025-10-30",
      image: "/images/robe.jpeg",
      category: "Artisanat",
      originalPrice: 15000,
      newPrice: 10500,
      vendorName: "Boutique Artisanat Dakar"
    },
    {
      id: 2,
      title: "Fruits Frais du Jour",
      description: "Fruits de saison à prix réduit, fraîcheur garantie",
      discount: "25%",
      endDate: "2025-10-20",
      image: "/images/montre.jpeg",
      category: "Alimentation",
      originalPrice: 2000,
      newPrice: 1500,
      vendorName: "Fruits & Légumes Bio"
    },
    {
      id: 3,
      title: "Poterie Artisanale",
      description: "Collection complète de céramiques faites main",
      discount: "20%",
      endDate: "2025-11-02",
      image: "/images/phone.jpeg",
      category: "Décoration",
      originalPrice: 8000,
      newPrice: 6400,
      vendorName: "Atelier Poterie Locale"
    },
    {
      id: 4,
      title: "Textiles Wax Premium",
      description: "Tissus wax authentiques et vêtements sur mesure",
      discount: "15%",
      endDate: "2025-10-25",
      image: "/images/robe.jpeg",
      category: "Vêtements",
      originalPrice: 12000,
      newPrice: 10200,
      vendorName: "Textiles Traditionnels"
    }
  ];

  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) return "Expiré";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) return `${days}j ${hours}h`;
    return `${hours}h`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Promotions & Offres Spéciales
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Découvrez les meilleures réductions de nos vendeurs partenaires.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold">
              <Percent className="w-5 h-5" /> Jusqu'à -30%
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold">
              <Tag className="w-5 h-5" /> Offres Limitées
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Offres Actuelles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <figure className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Badge de réduction */}
                <div className="badge badge-error absolute top-4 left-4 text-white font-bold px-4 py-3">
                  -{promo.discount}
                </div>

                {/* Temps restant */}
                <div className="badge badge-warning absolute top-4 right-4 text-white font-semibold flex items-center gap-1 px-3 py-3">
                  <Clock className="w-4 h-4" /> {getTimeRemaining(promo.endDate)}
                </div>
              </figure>

              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <span className="badge badge-primary">{promo.category}</span>
                  <span className="text-xs text-gray-500">par {promo.vendorName}</span>
                </div>

                <h2 className="card-title text-lg">{promo.title}</h2>
                <p className="text-sm text-gray-600">{promo.description}</p>

                <div className="flex flex-col gap-2 my-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">
                      {promo.newPrice.toLocaleString()} FCFA
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      {promo.originalPrice.toLocaleString()} FCFA
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    Économie : {(promo.originalPrice - promo.newPrice).toLocaleString()} FCFA
                  </span>
                </div>

                <div className="card-actions">
                  <button className="btn btn-primary w-full">
                    Profiter de l'offre
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ne Manquez Aucune Promotion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Inscrivez-vous pour recevoir nos offres exclusives directement par email.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="input input-bordered flex-1"
            />
            <button className="btn btn-primary">
              S'abonner
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Pas de spam, désabonnement possible à tout moment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;