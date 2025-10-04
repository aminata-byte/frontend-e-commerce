import { Link } from "react-router-dom";
import { BarChart, Users, Package, DollarSign } from "lucide-react";

export default function DashboardAdmin() {
  const stats = {
    totalVendeurs: 42,
    totalCommandes: 128,
    totalProduits: 541,
    commissionsDue: 125600,
  };

  return (
    <div>
      {/* En-tête */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white text-center py-16 sm:py-20 lg:py-24 mt-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Tableau de bord administrateur
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
            Gérez votre plateforme, validez les vendeurs et suivez les commissions
          </p>
          <Link
            to="/admin/vendeurs"
            className="inline-block bg-white text-orange-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Gérer les vendeurs
          </Link>
        </div>
      </section>

      {/* Statistiques principales */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
            Statistiques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-2 sm:mb-3">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-center text-gray-500 mb-2">
                Vendeurs
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-center text-orange-600">
                {stats.totalVendeurs}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-2 sm:mb-3">
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-center text-gray-500 mb-2">
                Commandes
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-center text-orange-600">
                {stats.totalCommandes}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-2 sm:mb-3">
                <BarChart className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-center text-gray-500 mb-2">
                Produits
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-center text-orange-600">
                {stats.totalProduits}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-2 sm:mb-3">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-center text-gray-500 mb-2">
                Commissions
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-center text-orange-600">
                {stats.commissionsDue.toLocaleString()} FCFA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derniers vendeurs */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">
            Derniers vendeurs inscrits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12">
            Gérez les nouvelles inscriptions et validez les vendeurs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Boutique A", date: "02 Oct 2025", status: "En attente" },
              { name: "Boutique B", date: "01 Oct 2025", status: "Validé" },
              { name: "Boutique C", date: "30 Sept 2025", status: "En attente" },
            ].map((vendor, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1">
                    {vendor.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">{vendor.date}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      vendor.status === "Validé"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {vendor.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activité récente */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">
            Activité récente
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12">
            Suivez les dernières actions sur la plateforme
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Nouvelles commandes", value: "20", icon: <Package className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
              { title: "Signalements", value: "3", icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
              { title: "Nouveaux vendeurs", value: "5", icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" /> },
            ].map((activity, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-2 sm:mb-3">{activity.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-center text-gray-700 mb-1">
                  {activity.title}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-center text-orange-600">
                  {activity.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}