import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* En-tête avec dégradé */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white py-20 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Une question ? Un problème ? Notre équipe est là pour vous aider.
          N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
        </p>
      </section>

      {/* Section principale */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Envoyez-nous un message
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  placeholder="Votre prénom"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="exemple@email.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Sujet *
              </label>
              <select
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Choisissez un sujet</option>
                <option value="commande">Problème de commande</option>
                <option value="vendeur">Devenir vendeur</option>
                <option value="technique">Problème technique</option>
                <option value="partenariat">Partenariat</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message *
              </label>
              <textarea
                placeholder="Décrivez votre demande..."
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition flex justify-center items-center gap-2"
            >
              <Send className="w-5 h-5" /> Envoyer le message
            </button>
          </form>
        </div>

        {/* Infos de contact */}
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Informations de contact
            </h3>

            <div className="space-y-5 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Adresse</h4>
                  <p className="text-sm mt-1">
                    Plateau, Avenue Léopold Sédar Senghor<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Téléphone</h4>
                  <p className="text-sm mt-1">
                    +221 33 123 45 67<br />
                    +221 77 987 65 43
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-sm mt-1">
                    contact@polymarket.sn<br />
                    support@polymarket.sn
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Horaires</h4>
                  <p className="text-sm mt-1">
                    Lundi - Vendredi : 8h - 18h<br />
                    Samedi : 9h - 16h<br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgence */}
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Urgence commande/livraison
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              En cas de problème urgent, contactez-nous directement :
            </p>
            <div className="flex items-center gap-2 text-orange-700 font-semibold text-lg">
              <Phone className="w-5 h-5" /> +221 70 123 45 67
            </div>
            <p className="text-xs text-gray-500 mt-2">Disponible 24h/7j</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}