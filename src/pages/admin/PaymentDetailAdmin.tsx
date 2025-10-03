// src/pages/admin/PaymentDetailAdmin.tsx
import { useParams, Link } from "react-router-dom";

export default function PaymentDetailAdmin() {
  const { id } = useParams();

  // 🔹 Simule les données récupérées selon l'id
  const payment = {
    id,
    vendor: "Artisanat Kofi",
    month: "01/2025",
    totalSales: 145000,
    commission: 14500,
    status: "pending",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Détails du Paiement</h1>

        <div className="space-y-3">
          <p><strong>Vendeur :</strong> {payment.vendor}</p>
          <p><strong>Mois :</strong> {payment.month}</p>
          <p><strong>Ventes totales :</strong> {payment.totalSales.toLocaleString()} FCFA</p>
          <p><strong>Commission :</strong> {payment.commission.toLocaleString()} FCFA</p>
          <p>
            <strong>Statut :</strong>{" "}
            <span className={payment.status === "paid" ? "text-green-600" : "text-yellow-600"}>
              {payment.status === "paid" ? "Payé" : "En attente"}
            </span>
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/admin/payments"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            ⬅ Retour à la liste
          </Link>
        </div>
      </div>
    </div>
  );
}
