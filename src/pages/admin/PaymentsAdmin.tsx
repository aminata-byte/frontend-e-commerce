// src/pages/admin/PaymentsAdmin.tsx
import { useState } from "react";
import { Eye, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Gestion des commissions / paiements — page admin
 * Affiche les détails complets de chaque vendeur avec leurs ventes
 */

export default function PaymentsAdmin() {
  const [records, setRecords] = useState([
    {
      id: 1,
      vendor: "Artisanat Kofi",
      month: "01/2025",
      status: "pending",
      sales: [
        { id: 1, product: "Panier en osier", date: "05/01/2025", price: 15000, commission: 1500 },
        { id: 2, product: "Collier traditionnel", date: "08/01/2025", price: 8000, commission: 800 },
        { id: 3, product: "Masque décoratif", date: "12/01/2025", price: 25000, commission: 2500 },
        { id: 4, product: "Statuette en bois", date: "18/01/2025", price: 12000, commission: 1200 },
        { id: 5, product: "Panier en osier", date: "22/01/2025", price: 15000, commission: 1500 },
        { id: 6, product: "Collier perles", date: "25/01/2025", price: 20000, commission: 2000 },
        { id: 7, product: "Sculpture bois", date: "28/01/2025", price: 35000, commission: 3500 },
        { id: 8, product: "Panier décoratif", date: "30/01/2025", price: 15000, commission: 1500 },
      ],
    },
    {
      id: 2,
      vendor: "Poterie Ama",
      month: "12/2024",
      status: "paid",
      sales: [
        { id: 9, product: "Vase traditionnel", date: "05/12/2024", price: 22000, commission: 2200 },
        { id: 10, product: "Assiette décorée", date: "10/12/2024", price: 8000, commission: 800 },
        { id: 11, product: "Pot à eau", date: "15/12/2024", price: 15000, commission: 1500 },
        { id: 12, product: "Vase décoratif", date: "20/12/2024", price: 28000, commission: 2800 },
        { id: 13, product: "Service à thé", date: "22/12/2024", price: 35000, commission: 3500 },
        { id: 14, product: "Assiette artisanale", date: "28/12/2024", price: 20000, commission: 2000 },
      ],
    },
    {
      id: 3,
      vendor: "Bijoux Amina",
      month: "01/2025",
      status: "pending",
      sales: [
        { id: 15, product: "Bracelet doré", date: "03/01/2025", price: 5000, commission: 500 },
        { id: 16, product: "Boucles d'oreilles", date: "07/01/2025", price: 7500, commission: 750 },
        { id: 17, product: "Collier perles", date: "10/01/2025", price: 12000, commission: 1200 },
        { id: 18, product: "Bracelet argent", date: "15/01/2025", price: 8000, commission: 800 },
        { id: 19, product: "Bague dorée", date: "20/01/2025", price: 6000, commission: 600 },
        { id: 20, product: "Collier traditionnel", date: "25/01/2025", price: 15000, commission: 1500 },
      ],
    },
    {
      id: 4,
      vendor: "Tissus Fatou",
      month: "01/2025",
      status: "pending",
      sales: [
        { id: 21, product: "Pagne wax", date: "04/01/2025", price: 18000, commission: 1800 },
        { id: 22, product: "Boubou brodé", date: "09/01/2025", price: 35000, commission: 3500 },
        { id: 23, product: "Pagne wax", date: "14/01/2025", price: 18000, commission: 1800 },
        { id: 24, product: "Robe traditionnelle", date: "19/01/2025", price: 45000, commission: 4500 },
        { id: 25, product: "Ensemble complet", date: "24/01/2025", price: 55000, commission: 5500 },
      ],
    },
  ]);

  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const markPaid = (id: number) => {
    setRecords(prev => prev.map(r => (r.id === id ? { ...r, status: "paid" } : r)));
    alert("Paiement validé");
  };

  // Calculer les totaux pour chaque vendeur
  const calculateVendorTotals = (sales: any[]) => {
    const totalSales = sales.reduce((sum, sale) => sum + sale.price, 0);
    const totalCommission = sales.reduce((sum, sale) => sum + sale.commission, 0);
    return { totalSales, totalCommission };
  };

  // Calculer le grand total
  const grandTotals = records.reduce(
    (acc, record) => {
      const { totalSales, totalCommission } = calculateVendorTotals(record.sales);
      return {
        sales: acc.sales + totalSales,
        commission: acc.commission + totalCommission,
      };
    },
    { sales: 0, commission: 0 }
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Commissions & Paiements</h1>
      </div>

      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left text-sm text-gray-600 w-10"></th>
                <th className="p-3 text-left text-sm text-gray-600">Vendeur</th>
                <th className="p-3 text-left text-sm text-gray-600">Période</th>
                <th className="p-3 text-right text-sm text-gray-600">Ventes totales</th>
                <th className="p-3 text-right text-sm text-gray-600">Commission totale</th>
                <th className="p-3 text-left text-sm text-gray-600">Statut</th>
                <th className="p-3 text-right text-sm text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {records.map((r) => {
                const { totalSales, totalCommission } = calculateVendorTotals(r.sales);
                const isExpanded = expandedRows.includes(r.id);

                return (
                  <>
                    {/* Ligne principale du vendeur */}
                    <tr key={r.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <button
                          onClick={() => toggleRow(r.id)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </td>
                      <td className="p-3 font-medium">{r.vendor}</td>
                      <td className="p-3">{r.month}</td>
                      <td className="p-3 text-right">{totalSales.toLocaleString()} FCFA</td>
                      <td className="p-3 text-right text-orange-600 font-bold">
                        {totalCommission.toLocaleString()} FCFA
                      </td>
                      <td className="p-3">
                        {r.status === "pending" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            En attente
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Payé
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          to={`/admin/paiement/${r.id}`}
                          className="mr-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 inline-flex items-center text-sm"
                        >
                          <Eye className="w-4 h-4 mr-1" /> Voir
                        </Link>

                        {r.status !== "paid" && (
                          <button
                            onClick={() => markPaid(r.id)}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100 inline-flex items-center text-sm"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" /> Valider
                          </button>
                        )}
                      </td>
                    </tr>

                    {/* Détails des ventes (visible quand expandé) */}
                    {isExpanded && (
                      <tr>
                        <td colSpan={7} className="p-0 bg-gray-50">
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">
                              📦 Détail des ventes de {r.vendor}
                            </h3>
                            <div className="bg-white rounded-lg border overflow-hidden">
                              <table className="w-full text-sm">
                                <thead className="bg-gray-100">
                                  <tr>
                                    <th className="p-2 text-left text-gray-600">Produit</th>
                                    <th className="p-2 text-left text-gray-600">Date de vente</th>
                                    <th className="p-2 text-right text-gray-600">Prix (FCFA)</th>
                                    <th className="p-2 text-right text-gray-600">Commission (FCFA)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {r.sales.map((sale, idx) => (
                                    <tr key={sale.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                      <td className="p-2">{sale.product}</td>
                                      <td className="p-2">{sale.date}</td>
                                      <td className="p-2 text-right">{sale.price.toLocaleString()}</td>
                                      <td className="p-2 text-right font-semibold text-blue-600">
                                        {sale.commission.toLocaleString()}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                                <tfoot className="bg-blue-50 font-bold">
                                  <tr>
                                    <td className="p-2" colSpan={2}>
                                      Total {r.vendor}
                                    </td>
                                    <td className="p-2 text-right">{totalSales.toLocaleString()}</td>
                                    <td className="p-2 text-right text-blue-700">
                                      {totalCommission.toLocaleString()}
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Grand Total */}
        <div className="bg-green-50 border-t-2 border-green-500 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">📊 Grand Total ({records.length} vendeurs)</p>
              <p className="text-xs text-gray-500">
                En attente: {records.filter(r => r.status === "pending").length} | 
                Payés: {records.filter(r => r.status === "paid").length}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Ventes totales</p>
              <p className="text-2xl font-bold text-gray-800">
                {grandTotals.sales.toLocaleString()} FCFA
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Commission totale</p>
              <p className="text-2xl font-bold text-green-600">
                {grandTotals.commission.toLocaleString()} FCFA
              </p>
            </div>
          </div>
        </div>

        {records.length === 0 && (
          <div className="p-6 text-center text-gray-600">Aucun relevé de commission</div>
        )}
      </div>
    </div>
  );
}