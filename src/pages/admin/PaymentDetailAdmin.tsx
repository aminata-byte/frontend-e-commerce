// src/pages/admin/PaymentDetailAdmin.tsx
import { useParams, Link } from "react-router-dom";

export default function PaymentDetailAdmin() {
  const { id } = useParams();

  // 🔹 Simule les données récupérées selon l'id
  // Dans un vrai projet, vous récupéreriez ces données depuis votre API
  const paymentsData = [
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
  ];

  // Récupérer le paiement correspondant à l'id
  const payment = paymentsData.find(p => p.id === Number(id));

  // Si le paiement n'existe pas
  if (!payment) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Paiement introuvable</h1>
          <p className="mb-4">Le paiement avec l'ID {id} n'existe pas.</p>
          <Link
            to="/admin/payments"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition inline-block"
          >
            ⬅ Retour à la liste
          </Link>
        </div>
      </div>
    );
  }

  // Calculer les totaux
  const totalSales = payment.sales.reduce((sum, sale) => sum + sale.price, 0);
  const totalCommission = payment.sales.reduce((sum, sale) => sum + sale.commission, 0);
  const numberOfSales = payment.sales.length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Détails du Paiement</h1>
            <Link
              to="/admin/payments"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition inline-flex items-center"
            >
              ⬅ Retour
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Vendeur</p>
              <p className="text-xl font-bold text-gray-800">{payment.vendor}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Période</p>
              <p className="text-xl font-bold text-gray-800">{payment.month}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Nombre de ventes</p>
              <p className="text-xl font-bold text-gray-800">{numberOfSales}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Statut</p>
              <p>
                {payment.status === "paid" ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    ✓ Payé
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    ⏳ En attente
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Détails des ventes */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📦 Détail des ventes</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-sm font-semibold text-gray-700 border">N°</th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700 border">Produit</th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700 border">Date de vente</th>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700 border">Prix (FCFA)</th>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700 border">Commission (FCFA)</th>
                </tr>
              </thead>
              <tbody>
                {payment.sales.map((sale, index) => (
                  <tr key={sale.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border text-gray-600">{index + 1}</td>
                    <td className="p-3 border font-medium text-gray-800">{sale.product}</td>
                    <td className="p-3 border text-gray-600">{sale.date}</td>
                    <td className="p-3 border text-right text-gray-800">{sale.price.toLocaleString()}</td>
                    <td className="p-3 border text-right font-semibold text-blue-600">
                      {sale.commission.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-blue-50 font-bold">
                  <td className="p-4 border" colSpan={3}>
                    <span className="text-gray-800">Total</span>
                  </td>
                  <td className="p-4 border text-right text-gray-800 text-lg">
                    {totalSales.toLocaleString()} FCFA
                  </td>
                  <td className="p-4 border text-right text-blue-700 text-lg">
                    {totalCommission.toLocaleString()} FCFA
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Résumé financier */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700 mb-2">💰 Total des ventes</p>
            <p className="text-3xl font-bold text-blue-900">{totalSales.toLocaleString()} FCFA</p>
            <p className="text-xs text-blue-600 mt-2">{numberOfSales} vente{numberOfSales > 1 ? 's' : ''} réalisée{numberOfSales > 1 ? 's' : ''}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <p className="text-sm text-green-700 mb-2">💵 Commission totale</p>
            <p className="text-3xl font-bold text-green-900">{totalCommission.toLocaleString()} FCFA</p>
            <p className="text-xs text-green-600 mt-2">
              Taux moyen: {((totalCommission / totalSales) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}