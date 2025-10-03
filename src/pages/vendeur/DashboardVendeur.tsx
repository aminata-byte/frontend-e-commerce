import React from "react";
import { Link } from "react-router-dom";
import NavbarVendeur from "../../components/NavbarVendeur";
import {
  Package,
  ShoppingCart,
  DollarSign,
  Star,
  AlertCircle,
  Clock,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function DashboardVendeur() {
  // 🔹 Simuler le vendeur connecté
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // 🔹 Données du vendeur
  const ventesTotales = 145000;
  const commission = Math.ceil(ventesTotales / 1000) * 100; // ✅ Calcul automatique

  const vendorStats = {
    totalSales: ventesTotales,
    totalOrders: 23,
    totalProducts: 12,
    averageRating: 4.8,
    monthlyGrowth: 15,
    pendingOrders: 3,
    commissionDue: commission,
    paymentStatus: "EN_ATTENTE", // EN_ATTENTE | SIGNALE_PAYE | PAYE_VALIDE | RETARD
  };

  // 🔹 Données commandes récentes
  const recentOrders = [
    {
      id: "CMD-001",
      customer: "Marie Diallo",
      product: "Tissu Kente Premium",
      amount: 25000,
      status: "EN_PREPARATION",
    },
    {
      id: "CMD-002",
      customer: "Amadou Ba",
      product: "Vase Céramique",
      amount: 15000,
      status: "LIVREE",
    },
    {
      id: "CMD-003",
      customer: "Fatou Sy",
      product: "Tissu Traditionnel",
      amount: 35000,
      status: "CONFIRMEE",
    },
  ];

  // 🔹 Données produits populaires
  const products = [
    {
      id: "1",
      name: "Tissu Kente Premium",
      price: 25000,
      stock: 15,
      image: "/images/robe.jpeg",
      status: "active",
      views: 245,
      sales: 8,
    },
    {
      id: "2",
      name: "Vase en Céramique",
      price: 15000,
      stock: 3,
      image: "/images/montre.jpeg",
      status: "low_stock",
      views: 156,
      sales: 5,
    },
  ];

  // 🔹 Fonctions utilitaires
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<
      string,
      { label: string; color: string }
    > = {
      EN_ATTENTE: {
        label: "En attente",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      },
      CONFIRMEE: {
        label: "Confirmée",
        color: "bg-blue-100 text-blue-800 border-blue-200",
      },
      EN_PREPARATION: {
        label: "En préparation",
        color: "bg-orange-100 text-orange-800 border-orange-200",
      },
      LIVREE: {
        label: "Livrée",
        color: "bg-green-100 text-green-800 border-green-200",
      },
      ANNULEE: {
        label: "Annulée",
        color: "bg-red-100 text-red-800 border-red-200",
      },
    };

    const config = statusConfig[status] || statusConfig.EN_ATTENTE;
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusConfig: Record<
      string,
      { label: string; color: string; icon: JSX.Element }
    > = {
      EN_ATTENTE: {
        label: "En attente",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        icon: <Clock className="w-3 h-3" />,
      },
      SIGNALE_PAYE: {
        label: "Signalé payé",
        color: "bg-blue-100 text-blue-800 border-blue-200",
        icon: <CheckCircle className="w-3 h-3" />,
      },
      PAYE_VALIDE: {
        label: "Payé validé",
        color: "bg-green-100 text-green-800 border-green-200",
        icon: <CheckCircle className="w-3 h-3" />,
      },
      RETARD: {
        label: "En retard",
        color: "bg-red-100 text-red-800 border-red-200",
        icon: <AlertCircle className="w-3 h-3" />,
      },
    };

    const config = statusConfig[status] || statusConfig.EN_ATTENTE;
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.color}`}
      >
        {config.icon}
        {config.label}
      </span>
    );
  };

  // 🔹 Rendu principal
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Navbar vendeur */}
      <NavbarVendeur />

      <main className="container mx-auto px-4 mt-24 mb-12">
        {/* 🏪 En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Tableau de Bord Vendeur
          </h1>
          <p className="text-gray-600">
            Bienvenue dans votre espace de gestion —{" "}
            <span className="font-semibold">
              {user.nom || "Artisanat Kofi"}
            </span>
          </p>
        </div>

        {/* 📊 Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Ventes totales */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Ventes Totales
              </h3>
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {formatPrice(vendorStats.totalSales)}
            </div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +
              {vendorStats.monthlyGrowth}% ce mois
            </p>
          </div>

          {/* Commandes */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Commandes
              </h3>
              <ShoppingCart className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {vendorStats.totalOrders}
            </div>
            <p className="text-xs text-gray-600">
              {vendorStats.pendingOrders} en attente
            </p>
          </div>

          {/* Produits */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Produits</h3>
              <Package className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {vendorStats.totalProducts}
            </div>
            <p className="text-xs text-gray-600">
              {products.filter((p) => p.status === "low_stock").length} bientôt
              en rupture
            </p>
          </div>

          {/* Note moyenne */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Note Moyenne
              </h3>
              <Star className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {vendorStats.averageRating}
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(vendorStats.averageRating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ⚠️ Alerte commission */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Commission à payer — {formatPrice(vendorStats.commissionDue)}
              </h3>
              <p className="text-sm text-yellow-700 mb-4">
                Votre commission du mois dernier est due. Vous avez jusqu’au 5
                de ce mois pour effectuer le paiement.
              </p>
              <div className="flex gap-3">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition">
                  Signaler le paiement
                </button>
                <Link
                  to="/vendeur/commissions"
                  className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-50 transition"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 📦 Commandes récentes & Produits populaires */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 grid lg:grid-cols-2 gap-8">
          {/* Commandes récentes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Commandes Récentes
              </h3>
              <Link
                to="/vendeur/commandes"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
              >
                Voir tout
              </Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200"
                >
                  <div>
                    <p className="font-medium text-gray-800">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-sm text-gray-800">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      {formatPrice(order.amount)}
                    </p>
                    {getStatusBadge(order.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Produits populaires */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Produits Populaires
              </h3>
              <Link
                to="/vendeur/produits"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
              >
                Voir tout
              </Link>
            </div>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.views} vues • {product.sales} ventes
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Stock : {product.stock}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
