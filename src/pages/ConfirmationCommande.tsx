// src/pages/ConfirmationCommande.tsx (version améliorée)
import { CheckCircle, Home, Truck, Clock, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function ConfirmationCommande() {
  const location = useLocation();
  const { total, deliveryMode, orderNumber } = location.state || { 
    total: 0, 
    deliveryMode: "pickup",
    orderNumber: `CMD${Date.now()}`
  };

  const [countdown, setCountdown] = useState(10);

  // Compte à rebours pour redirection automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icône de succès */}
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Commande Confirmée ! 🎉
            </h1>
            <p className="text-gray-600 text-lg">
              Votre commande a été enregistrée avec succès
            </p>
          </div>

          {/* Carte de confirmation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-100">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Détails commande */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Détails de la commande
                </h2>
                
                <div className="space-y-3">
                  <p className="flex justify-between">
                    <span className="text-gray-600">N° de commande :</span>
                    <span className="font-semibold text-orange-600">{orderNumber}</span>
                  </p>
                  
                  <p className="flex justify-between">
                    <span className="text-gray-600">Montant total :</span>
                    <span className="font-bold text-lg text-orange-600">
                      {total.toLocaleString()} FCFA
                    </span>
                  </p>

                  <p className="flex items-start gap-2 pt-2">
                    {deliveryMode === "pickup" ? (
                      <>
                        <Home className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Mode : Retrait sur place</strong><br />
                          <span className="text-sm text-green-600">Gratuit - Prêt dans 2h</span>
                        </span>
                      </>
                    ) : (
                      <>
                        <Truck className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Mode : Livraison à domicile</strong><br />
                          <span className="text-sm text-gray-500">Frais à régler au livreur</span>
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Prochaines étapes */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Prochaines étapes
                </h2>
                
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <span className="text-gray-700">
                      <strong>Confirmation</strong><br />
                      <span className="text-sm">Appel sous 30 minutes</span>
                    </span>
                  </p>

                  <p className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <span className="text-gray-700">
                      <strong>Préparation</strong><br />
                      <span className="text-sm">Colis préparé sous 24h</span>
                    </span>
                  </p>

                  <p className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <span className="text-gray-700">
                      <strong>Récupération/Livraison</strong><br />
                      <span className="text-sm">Selon votre choix</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Message de contact */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-center gap-2 text-blue-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  Un email de confirmation vous a été envoyé
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/produits"
              className="btn btn-primary px-8 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              Continuer mes achats 🛍️
            </Link>
            
            <Link
              to="/commandes"
              className="btn btn-outline px-8 py-3 font-semibold rounded-lg border-gray-300 hover:bg-gray-50 transition"
            >
              Voir mes commandes
            </Link>
          </div>

          {/* Redirection automatique */}
          <p className="text-gray-500 text-sm mt-6">
            Redirection automatique vers la boutique dans {countdown} secondes...
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}