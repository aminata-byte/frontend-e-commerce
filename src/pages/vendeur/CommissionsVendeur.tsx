import { useState } from "react";
import {
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Eye,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavbarVendeur from "../../components/NavbarVendeur";

/* ===============================
   🔸 MODAL DÉTAIL COMMISSION
   =============================== */
const ModalDetailCommission = ({ commission, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
        <h2 className="text-2xl font-bold text-gray-800">
          📄 Détail Commission - {commission.periode}
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Récapitulatif */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Commission totale</p>
              <p className="text-3xl font-bold text-orange-600">
                {commission.montant.toLocaleString()} FCFA
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Ventes totales</p>
              <p className="text-2xl font-bold text-gray-800">
                {commission.ventesTotal.toLocaleString()} FCFA
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Nombre de ventes</p>
              <p className="text-2xl font-bold text-gray-800">
                {commission.ventes.length}
              </p>
            </div>
          </div>
        </div>

        {/* Détail des ventes */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Détail des ventes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Commande
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Produit
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Montant
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Commission
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {commission.ventes.map((vente) => (
                  <tr key={vente.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {vente.date}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">
                      {vente.commandeId}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {vente.produit}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-gray-800">
                      {vente.montant.toLocaleString()} FCFA
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-orange-600">
                      {vente.commission.toLocaleString()} FCFA
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => alert("Téléchargement du relevé...")}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Télécharger le relevé
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
);

/* ===============================
   🔸 PAGE PRINCIPALE
   =============================== */
export default function CommissionsVendeur() {
  const [selectedCommission, setSelectedCommission] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const commissions = [
    {
      id: 1,
      periode: "Janvier 2025",
      ventesTotal: 145000,
      montant: Math.ceil(145000 / 1000) * 100,
      dateLimite: "5 Février 2025",
      statut: "EN_ATTENTE",
      ventes: [
        {
          id: 1,
          date: "15/01/2025",
          commandeId: "CMD-001",
          produit: "Tissu Kente",
          montant: 25000,
          commission: 2500,
        },
      ],
    },
    {
      id: 2,
      periode: "Décembre 2024",
      ventesTotal: 128000,
      montant: Math.ceil(128000 / 1000) * 100,
      dateLimite: "5 Janvier 2025",
      statut: "PAYE_VALIDE",
      ventes: [],
    },
  ];

  const getStatusBadge = (statut: string) => {
    const config = {
      EN_ATTENTE: {
        label: "En attente",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        icon: <Clock className="w-3 h-3" />,
      },
      PAYE_VALIDE: {
        label: "Payé validé",
        color: "bg-green-100 text-green-800 border-green-200",
        icon: <CheckCircle className="w-3 h-3" />,
      },
    };
    const item = config[statut] || config.EN_ATTENTE;
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${item.color}`}>
        {item.icon}
        {item.label}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarVendeur />

      <main className="container mx-auto px-4 mt-24 mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          💰 Gestion des Commissions
        </h1>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Période
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ventes Totales
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date Limite
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {commissions.map((commission) => (
                <tr key={commission.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {commission.periode}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {commission.ventesTotal.toLocaleString()} FCFA
                  </td>
                  <td className="px-6 py-4 text-orange-600 font-bold">
                    {commission.montant.toLocaleString()} FCFA
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {commission.dateLimite}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(commission.statut)}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        setSelectedCommission(commission);
                        setShowDetailModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition"
                      title="Voir les détails"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {showDetailModal && selectedCommission && (
        <ModalDetailCommission
          commission={selectedCommission}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </div>
  );
}
