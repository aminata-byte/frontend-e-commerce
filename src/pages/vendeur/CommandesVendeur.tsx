import { CheckCircle, XCircle, Clock } from "lucide-react";
import NavbarVendeur from "../../components/NavbarVendeur";

export default function CommandesVendeur() {
  // ✅ Données simulées
  const commandes = [
    {
      id: "CMD-001",
      client: "Marie Diallo",
      produit: "Tissu Kente Premium",
      montant: 25000,
      statut: "En préparation",
    },
    {
      id: "CMD-002",
      client: "Amadou Ba",
      produit: "Vase Céramique",
      montant: 15000,
      statut: "Livrée",
    },
    {
      id: "CMD-003",
      client: "Fatou Sy",
      produit: "Tissu Traditionnel",
      montant: 35000,
      statut: "Confirmée",
    },
  ];

  // ✅ Style du badge de statut
  const getStatusBadge = (statut: string) => {
    if (statut === "Livrée") {
      return (
        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 border border-green-200 px-2.5 py-0.5 rounded-full text-xs font-medium">
          <CheckCircle className="w-4 h-4" /> {statut}
        </span>
      );
    }
    if (statut === "En préparation") {
      return (
        <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 border border-yellow-200 px-2.5 py-0.5 rounded-full text-xs font-medium">
          <Clock className="w-4 h-4" /> {statut}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full text-xs font-medium">
        <XCircle className="w-4 h-4" /> {statut}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarVendeur />

      <main className="container mx-auto px-6 py-24 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">📦 Mes Commandes</h1>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">N° Commande</th>
                <th className="p-4">Client</th>
                <th className="p-4">Produit</th>
                <th className="p-4">Montant</th>
                <th className="p-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((cmd) => (
                <tr key={cmd.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">{cmd.id}</td>
                  <td className="p-4 text-gray-700">{cmd.client}</td>
                  <td className="p-4 text-gray-700">{cmd.produit}</td>
                  <td className="p-4 text-orange-600 font-semibold">
                    {cmd.montant.toLocaleString()} FCFA
                  </td>
                  <td className="p-4">{getStatusBadge(cmd.statut)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {commandes.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Aucune commande disponible pour le moment.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
