import { useState } from "react";
import { CheckCircle, XCircle, Eye, Store, Mail, MapPin, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Page de gestion/validation des inscriptions vendeurs
 * Permet à l'admin de valider ou refuser les demandes d'inscription
 */

interface Vendor {
  id: string;
  name: string;
  status: "pending" | "approved" | "rejected";
  email: string;
  phone: string;
  city: string;
  address: string;
  description: string;
  registrationDate: string;
  documents?: {
    businessLicense?: boolean;
    idCard?: boolean;
    taxCertificate?: boolean;
  };
}

export default function VendorsValidation() {
  const [vendors, setVendors] = useState<Vendor[]>([
    {
      id: "V-001",
      name: "Artisanat Kofi",
      status: "pending",
      email: "kofi@example.com",
      phone: "+221 77 123 45 67",
      city: "Dakar",
      address: "Rue 10, Parcelles Assainies",
      description: "Spécialisé dans l'artisanat traditionnel sénégalais : paniers, sculptures, masques",
      registrationDate: "2025-01-15",
      documents: {
        businessLicense: true,
        idCard: true,
        taxCertificate: false,
      },
    },
    {
      id: "V-002",
      name: "Poterie Ama",
      status: "approved",
      email: "ama@example.com",
      phone: "+221 76 987 65 43",
      city: "Thiès",
      address: "Quartier Randoulène",
      description: "Création de poteries artisanales, vases, assiettes et objets décoratifs",
      registrationDate: "2024-12-20",
      documents: {
        businessLicense: true,
        idCard: true,
        taxCertificate: true,
      },
    },
    {
      id: "V-003",
      name: "Mode Saly",
      status: "pending",
      email: "saly@example.com",
      phone: "+221 70 456 78 90",
      city: "Saint-Louis",
      address: "Avenue Jean Mermoz",
      description: "Boutique de mode africaine moderne, vêtements et accessoires",
      registrationDate: "2025-01-18",
      documents: {
        businessLicense: true,
        idCard: true,
        taxCertificate: true,
      },
    },
    {
      id: "V-004",
      name: "Bijoux Amina",
      status: "pending",
      email: "amina@example.com",
      phone: "+221 78 234 56 78",
      city: "Dakar",
      address: "Médina, Rue 15",
      description: "Création de bijoux artisanaux en or et argent",
      registrationDate: "2025-01-20",
      documents: {
        businessLicense: false,
        idCard: true,
        taxCertificate: false,
      },
    },
  ]);

  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const approve = (id: string) => {
    setVendors((prev) => prev.map(v => v.id === id ? {...v, status: "approved"} : v));
    setSelectedVendor(null);
    // Ici vous enverriez une notification par email au vendeur
    alert(`✅ Vendeur ${id} validé avec succès !`);
  };

  const reject = (id: string, reason?: string) => {
    setVendors((prev) => prev.map(v => v.id === id ? {...v, status: "rejected"} : v));
    setSelectedVendor(null);
    // Ici vous enverriez une notification par email avec la raison du refus
    alert(`❌ Vendeur ${id} refusé${reason ? `: ${reason}` : ""}`);
  };

  const filteredVendors = vendors.filter(v => {
    if (filter === "all") return v.status !== "rejected";
    return v.status === filter;
  });

  const pendingCount = vendors.filter(v => v.status === "pending").length;
  const approvedCount = vendors.filter(v => v.status === "approved").length;

  return (
    <div>
      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Validation des vendeurs</h1>
          <p className="text-sm text-gray-600 mt-1">
            Gérez les demandes d'inscription des nouveaux vendeurs
          </p>
        </div>
        <Link
          to="/admin"
          className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition inline-flex items-center gap-2"
        >
          ← Retour dashboard
        </Link>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600 mb-1">Total vendeurs</p>
          <p className="text-2xl font-bold text-gray-800">{vendors.filter(v => v.status !== "rejected").length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600 mb-1">En attente</p>
          <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600 mb-1">Validés</p>
          <p className="text-2xl font-bold text-green-600">{approvedCount}</p>
        </div>
      </div>

      {/* Filtres */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Tous ({vendors.filter(v => v.status !== "rejected").length})
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "pending"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          En attente ({pendingCount})
        </button>
        <button
          onClick={() => setFilter("approved")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "approved"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Validés ({approvedCount})
        </button>
      </div>

      {/* Tableau */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">ID</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Boutique</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Contact</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Localisation</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Documents</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Statut</th>
                <th className="text-right p-3 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map(v => {
                const docsComplete = v.documents?.businessLicense && v.documents?.idCard && v.documents?.taxCertificate;
                
                return (
                  <tr key={v.id} className="border-t hover:bg-gray-50 transition">
                    <td className="p-3">
                      <span className="font-mono text-sm text-gray-600">{v.id}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Store className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{v.name}</p>
                          <p className="text-xs text-gray-500">
                            <Calendar className="inline w-3 h-3 mr-1" />
                            {new Date(v.registrationDate).toLocaleDateString("fr-FR")}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p className="text-gray-800 flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {v.email}
                        </p>
                        <p className="text-gray-600 flex items-center gap-1 mt-1">
                          <Phone className="w-3 h-3" /> {v.phone}
                        </p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p className="text-gray-800 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {v.city}
                        </p>
                        <p className="text-xs text-gray-500">{v.address}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      {docsComplete ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          ✓ Complet
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          ⚠ Incomplet
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {v.status === "pending" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          ⏳ En attente
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          ✓ Validé
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setSelectedVendor(v)}
                        className="mr-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition inline-flex items-center text-sm"
                      >
                        <Eye className="w-4 h-4 mr-1" /> Détails
                      </button>
                      {v.status === "pending" && (
                        <>
                          <button
                            onClick={() => approve(v.id)}
                            className="mr-2 px-3 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition inline-flex items-center text-sm"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" /> Valider
                          </button>
                          <button
                            onClick={() => reject(v.id)}
                            className="px-3 py-1 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition inline-flex items-center text-sm"
                          >
                            <XCircle className="w-4 h-4 mr-1" /> Refuser
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredVendors.length === 0 && (
          <div className="p-12 text-center">
            <Store className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Aucun vendeur à afficher</p>
          </div>
        )}
      </div>

      {/* Modal détails vendeur */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Détails du vendeur</h2>
                <button
                  onClick={() => setSelectedVendor(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">ID</p>
                  <p className="font-mono font-medium">{selectedVendor.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Statut</p>
                  <p>
                    {selectedVendor.status === "pending" ? (
                      <span className="text-yellow-600">En attente</span>
                    ) : (
                      <span className="text-green-600">Validé</span>
                    )}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Nom de la boutique</p>
                <p className="font-medium text-lg">{selectedVendor.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Description</p>
                <p className="text-gray-800">{selectedVendor.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-800">{selectedVendor.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Téléphone</p>
                  <p className="text-gray-800">{selectedVendor.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Adresse complète</p>
                <p className="text-gray-800">{selectedVendor.address}, {selectedVendor.city}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Documents fournis</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {selectedVendor.documents?.businessLicense ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="text-sm">Licence commerciale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedVendor.documents?.idCard ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="text-sm">Carte d'identité</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedVendor.documents?.taxCertificate ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="text-sm">Certificat fiscal</span>
                  </div>
                </div>
              </div>
            </div>

            {selectedVendor.status === "pending" && (
              <div className="p-6 border-t bg-gray-50 flex gap-3">
                <button
                  onClick={() => approve(selectedVendor.id)}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  ✓ Valider ce vendeur
                </button>
                <button
                  onClick={() => reject(selectedVendor.id)}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium"
                >
                  ✗ Refuser
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}