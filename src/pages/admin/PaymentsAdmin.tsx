import { useState } from "react";
import { Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ IMPORT MANQUANT AJOUTÉ

/**
 * Gestion des commissions / paiements — page admin
 * Remplace la logique avec vos endpoints backend.
 */

export default function PaymentsAdmin() {
  const [records, setRecords] = useState([
    { id: 1, vendor: "Artisanat Kofi", month: "01/2025", totalSales: 145000, commission: 14500, status: "pending" },
    { id: 2, vendor: "Poterie Ama", month: "12/2024", totalSales: 128000, commission: 12800, status: "paid" },
  ]);

  const markPaid = (id: number) => {
    setRecords(prev => prev.map(r => (r.id === id ? { ...r, status: "paid" } : r)));
    alert("Paiement validé");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Commissions & Paiements</h1>
      </div>

      <div className="bg-white rounded-lg shadow border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left text-sm text-gray-600">Vendeur</th>
              <th className="p-3 text-left text-sm text-gray-600">Période</th>
              <th className="p-3 text-right text-sm text-gray-600">Ventes</th>
              <th className="p-3 text-right text-sm text-gray-600">Commission</th>
              <th className="p-3 text-left text-sm text-gray-600">Statut</th>
              <th className="p-3 text-right text-sm text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{r.vendor}</td>
                <td className="p-3">{r.month}</td>
                <td className="p-3 text-right">{r.totalSales.toLocaleString()} FCFA</td>
                <td className="p-3 text-right text-orange-600 font-bold">{r.commission.toLocaleString()} FCFA</td>
                <td className="p-3">
                  {r.status === "pending" ? (
                    <span className="text-yellow-600">En attente</span>
                  ) : (
                    <span className="text-green-600">Payé</span>
                  )}
                </td>
                <td className="p-3 text-right">
                  <Link
                    to={`/admin/paiement/${r.id}`}
                    className="mr-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 inline-flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-1" /> Voir
                  </Link>

                  {r.status !== "paid" && (
                    <button
                      onClick={() => markPaid(r.id)}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100"
                    >
                      <CheckCircle className="inline w-4 h-4 mr-1" /> Valider paiement
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {records.length === 0 && (
          <div className="p-6 text-center text-gray-600">Aucun relevé de commission</div>
        )}
      </div>
    </div>
  );
}
