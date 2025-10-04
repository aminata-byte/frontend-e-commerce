import { Save, Bell, Shield, Mail } from "lucide-react";

export default function SettingsAdmin() {
  return (
    <div>
      {/* En-tête */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white text-center py-16 sm:py-20 lg:py-24 mt-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Paramètres
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Gérez les paramètres de votre plateforme
          </p>
        </div>
      </section>

      {/* Formulaire de paramètres */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Notifications</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Notifications par email</span>
                <input type="checkbox" className="toggle toggle-warning" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Alertes de nouveaux vendeurs</span>
                <input type="checkbox" className="toggle toggle-warning" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Alertes de paiements</span>
                <input type="checkbox" className="toggle toggle-warning" />
              </label>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Sécurité</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ancien mot de passe
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Email</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                defaultValue="admin@polymarket.com"
              />
            </div>
          </div>

          {/* Bouton sauvegarder */}
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
            <Save className="w-5 h-5" />
            Enregistrer les modifications
          </button>
        </div>
      </section>
    </div>
  );
}