import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Page de gestion/validation des inscriptions vendeurs
 * Remplace les données locales par fetch() vers ton backend.
 */

export default function VendorsValidation() {
  const [vendors, setVendors] = useState([
    { id: "V-001", name: "Artisanat Kofi", status: "pending", email: "kofi@example.com", city: "Dakar" },
    { id: "V-002", name: "Poterie Ama", status: "approved", email: "ama@example.com", city: "Thiès" },
    { id: "V-003", name: "Mode Saly", status: "pending", email: "saly@example.com", city: "Saint-Louis" },
  ]);

  const approve = (id: string) => {
    setVendors((prev) => prev.map(v => v.id === id ? {...v, status: "approved"} : v));
    alert(`Vendeur ${id} validé`);
  };

  const reject = (id: string) => {
    setVendors((prev) => prev.filter(v => v.id !== id));
    alert(`Vendeur ${id} refusé`);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Validation des vendeurs</h1>
        <Link to="/admin" className="text-sm text-gray-600">Retour dashboard</Link>
      </div>

      <div className="bg-white rounded-lg shadow border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 text-sm text-gray-600">ID</th>
              <th className="text-left p-3 text-sm text-gray-600">Boutique</th>
              <th className="text-left p-3 text-sm text-gray-600">Email</th>
              <th className="text-left p-3 text-sm text-gray-600">Ville</th>
              <th className="text-left p-3 text-sm text-gray-600">Statut</th>
              <th className="text-right p-3 text-sm text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map(v => (
              <tr key={v.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{v.id}</td>
                <td className="p-3 font-medium">{v.name}</td>
                <td className="p-3">{v.email}</td>
                <td className="p-3">{v.city}</td>
                <td className="p-3">
                  {v.status === "pending" ? (
                    <span className="text-yellow-600">En attente</span>
                  ) : (
                    <span className="text-green-600">Validé</span>
                  )}
                </td>
                <td className="p-3 text-right">
                  {v.status === "pending" && (
                    <>
                      <button onClick={() => approve(v.id)} className="mr-2 px-3 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100">
                        <CheckCircle className="inline w-4 h-4 mr-1" /> Valider
                      </button>
                      <button onClick={() => reject(v.id)} className="px-3 py-1 bg-red-50 text-red-700 rounded-md hover:bg-red-100">
                        <XCircle className="inline w-4 h-4 mr-1" /> Refuser
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
