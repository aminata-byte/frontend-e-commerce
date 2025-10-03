import { useState } from "react";
import { CheckCircle } from "lucide-react";
import NavbarVendeur from "../../components/NavbarVendeur";

export default function SignalementPaiement() {
  const [montant, setMontant] = useState("");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simule l’envoi du signalement
    setMessage("✅ Paiement signalé avec succès !");
    setMontant("");
    setReference("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarVendeur />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">💰 Signalement de Paiement</h1>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Montant payé (FCFA)</label>
              <input
                type="number"
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Référence du paiement</label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                required
                placeholder="Ex : TRX-2025-0012"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" /> Signaler le paiement
            </button>
          </form>

          {message && <p className="text-green-600 text-center mt-4">{message}</p>}
        </div>
      </main>
    </div>
  );
}
