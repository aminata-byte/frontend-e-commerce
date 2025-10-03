import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Search,
  Filter,
  Eye
} from "lucide-react";

export default function Commandes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Données fictives des commandes
  const [orders, setOrders] = useState([
    {
      id: "CMD20240928001",
      date: "2024-09-28",
      total: 38000,
      status: "livree", // en_attente, confirmee, en_preparation, livree, annulee
      items: [
        { name: "Tissu Kente Premium", quantity: 2, price: 15000 },
        { name: "Panier tressé", quantity: 1, price: 8000 }
      ],
      vendor: "Artisanat Kofi",
      deliveryMode: "pickup"
    },
    {
      id: "CMD20240927002",
      date: "2024-09-27",
      total: 12000,
      status: "en_preparation",
      items: [
        { name: "Vase Céramique", quantity: 1, price: 12000 }
      ],
      vendor: "Poterie Ama",
      deliveryMode: "delivery"
    },
    {
      id: "CMD20240925003",
      date: "2024-09-25",
      total: 25000,
      status: "confirmee",
      items: [
        { name: "Sculpture Bois", quantity: 1, price: 25000 }
      ],
      vendor: "Art Ancestral",
      deliveryMode: "pickup"
    },
    {
      id: "CMD20240920004",
      date: "2024-09-20",
      total: 45000,
      status: "annulee",
      items: [
        { name: "Tissu Traditionnel", quantity: 3, price: 15000 }
      ],
      vendor: "Artisanat Kofi",
      deliveryMode: "delivery"
    }
  ]);

  // Filtrage des commandes
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Fonction pour obtenir les détails du statut
  const getStatusDetails = (status: string) => {
    switch (status) {
      case "en_attente":
        return { 
          label: "En attente", 
          color: "text-yellow-600 bg-yellow-50 border-yellow-200",
          icon: <Clock className="w-4 h-4" />
        };
      case "confirmee":
        return { 
          label: "Confirmée", 
          color: "text-blue-600 bg-blue-50 border-blue-200",
          icon: <CheckCircle className="w-4 h-4" />
        };
      case "en_preparation":
        return { 
          label: "En préparation", 
          color: "text-orange-600 bg-orange-50 border-orange-200",
          icon: <Package className="w-4 h-4" />
        };
      case "livree":
        return { 
          label: "Livrée", 
          color: "text-green-600 bg-green-50 border-green-200",
          icon: <Truck className="w-4 h-4" />
        };
      case "annulee":
        return { 
          label: "Annulée", 
          color: "text-red-600 bg-red-50 border-red-200",
          icon: <AlertCircle className="w-4 h-4" />
        };
      default:
        return { 
          label: "Inconnu", 
          color: "text-gray-600 bg-gray-50 border-gray-200",
          icon: <AlertCircle className="w-4 h-4" />
        };
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-24">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mes Commandes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retrouvez l'historique de toutes vos commandes et suivez leur statut en temps réel.
          </p>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une commande..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filtre par statut */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              >
                <option value="all">Tous les statuts</option>
                <option value="en_attente">En attente</option>
                <option value="confirmee">Confirmée</option>
                <option value="en_preparation">En préparation</option>
                <option value="livree">Livrée</option>
                <option value="annulee">Annulée</option>
              </select>
            </div>
          </div>
        </div>

        {/* Liste des commandes */}
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => {
              const status = getStatusDetails(order.status);
              
              return (
                <div
                  key={order.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition"
                >
                  {/* En-tête de la commande */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Commande #{order.id}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          Passée le {new Date(order.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                        {/* Statut */}
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${status.color}`}>
                          {status.icon}
                          {status.label}
                        </span>

                        {/* Total */}
                        <span className="text-xl font-bold text-orange-600">
                          {order.total.toLocaleString()} FCFA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Détails de la commande */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Articles */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Articles commandés</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-gray-600">
                                {item.quantity}x {item.name}
                              </span>
                              <span className="text-gray-800 font-medium">
                                {(item.price * item.quantity).toLocaleString()} FCFA
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Informations vendeur et livraison */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Informations</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Vendeur :</span>
                            <span className="text-gray-800 font-medium">{order.vendor}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mode de récupération :</span>
                            <span className="text-gray-800 font-medium">
                              {order.deliveryMode === "pickup" ? "Retrait sur place" : "Livraison à domicile"}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-4 flex gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition">
                            <Eye className="w-4 h-4" />
                            Voir les détails
                          </button>
                          
                          {order.status === "livree" && (
                            <button className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition">
                              <Package className="w-4 h-4" />
                              Noter le vendeur
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Aucune commande trouvée */
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Aucune commande trouvée
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter !== "all" 
                  ? "Aucune commande ne correspond à vos critères de recherche."
                  : "Vous n'avez pas encore passé de commande."
                }
              </p>
              <Link
                to="/produits"
                className="btn btn-primary text-white px-6 py-2 rounded-lg"
              >
                Découvrir nos produits
              </Link>
            </div>
          )}
        </div>

        {/* Statistiques rapides */}
        {filteredOrders.length > 0 && (
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Résumé de vos commandes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-orange-600">{orders.length}</p>
                <p className="text-sm text-gray-600">Total commandes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {orders.filter(o => o.status === "livree").length}
                </p>
                <p className="text-sm text-gray-600">Commandes livrées</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {orders.filter(o => o.status === "en_preparation" || o.status === "confirmee").length}
                </p>
                <p className="text-sm text-gray-600">En cours</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-600">
                  {orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()} FCFA
                </p>
                <p className="text-sm text-gray-600">Dépenses totales</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}