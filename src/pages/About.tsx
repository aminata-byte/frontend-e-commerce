// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Padding top pour compenser la navbar fixe */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* En-tête */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              À propos de PolyMarket
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
              PolyMarket est une marketplace 100% sénégalaise qui met en relation les artisans,
              créateurs et commerçants locaux avec des clients à travers tout le pays.
              Notre mission est de valoriser le savoir-faire africain et de faciliter
              les échanges grâce à une plateforme moderne, simple et sécurisée.
            </p>
          </div>

          {/* Cartes Vision, Mission, Valeurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🌍</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3">
                Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Promouvoir le commerce local et durable en Afrique.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💡</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3">
                Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Offrir une plateforme qui soutient les artisans et connecte les clients
                à des produits authentiques et de qualité.
              </p>
            </div>

            {/* Valeurs */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🤝</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3">
                Valeurs
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Transparence, confiance et innovation au service du commerce équitable.
              </p>
            </div>
          </div>

          {/* Section supplémentaire - Statistiques */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-6 sm:p-8 rounded-xl text-white text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
              <div className="text-xs sm:text-sm opacity-90">Vendeurs</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-6 sm:p-8 rounded-xl text-white text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">10k+</div>
              <div className="text-xs sm:text-sm opacity-90">Produits</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-6 sm:p-8 rounded-xl text-white text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">25k+</div>
              <div className="text-xs sm:text-sm opacity-90">Clients</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-6 sm:p-8 rounded-xl text-white text-center col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
              <div className="text-xs sm:text-sm opacity-90">Sénégalais</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}