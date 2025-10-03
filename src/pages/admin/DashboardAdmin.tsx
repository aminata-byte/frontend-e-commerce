import { Link } from "react-router-dom";
import { BarChart, Users, Package, DollarSign } from "lucide-react";

export default function DashboardAdmin() {
  // données fictives — remplacer par API/backend
  const stats = {
    totalVendeurs: 42,
    totalCommandes: 128,
    totalProduits: 541,
    commissionsDue: 125600,
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <div>
          <Link to="/admin/vendeurs" className="px-4 py-2 bg-orange-600 text-white rounded-md">
            Gérer les vendeurs
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Vendeurs</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalVendeurs}</p>
            </div>
            <Users className="w-10 h-10 text-orange-600" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Commandes</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalCommandes}</p>
            </div>
            <Package className="w-10 h-10 text-orange-600" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Produits</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalProduits}</p>
            </div>
            <BarChart className="w-10 h-10 text-orange-600" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Commissions dues</p>
              <p className="text-2xl font-bold text-orange-600">{stats.commissionsDue.toLocaleString()} FCFA</p>
            </div>
            <DollarSign className="w-10 h-10 text-orange-600" />
          </div>
        </div>
      </div>

      {/* section rapide */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="font-semibold mb-3">Derniers vendeurs inscrits</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex justify-between">
              <span>Boutique A</span>
              <span className="text-gray-500">En attente</span>
            </li>
            <li className="flex justify-between">
              <span>Boutique B</span>
              <span className="text-green-600">Validé</span>
            </li>
            <li className="flex justify-between">
              <span>Boutique C</span>
              <span className="text-yellow-600">En attente</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="font-semibold mb-3">Activité récente</h3>
          <p className="text-sm text-gray-600">20 nouvelles commandes aujourd'hui • 3 signalements de paiements</p>
        </div>
      </div>
    </div>
  );
}
