import { useState } from "react";
import { Save, Bell, Shield, Mail, Check, Eye, EyeOff } from "lucide-react";

export default function SettingsAdmin() {
  // États pour les notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [vendorAlerts, setVendorAlerts] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(false);

  // États pour les mots de passe
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    old: "",
    new: "",
    confirm: ""
  });

  // État pour l'email
  const [email, setEmail] = useState("admin@polymarket.com");

  // État pour le message de succès
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    // Validation basique
    if (passwords.new && passwords.new !== passwords.confirm) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (passwords.new && passwords.new.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    // Ici vous feriez un appel API pour sauvegarder
    console.log("Sauvegarde des paramètres...", {
      notifications: { emailNotifications, vendorAlerts, paymentAlerts },
      email,
      passwordChanged: !!passwords.new
    });

    // Afficher message de succès
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Réinitialiser les champs de mot de passe
    setPasswords({ old: "", new: "", confirm: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* En-tête */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white text-center py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Paramètres
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
            Gérez les paramètres de votre plateforme
          </p>
        </div>
      </section>

      {/* Message de succès */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in z-50">
          <Check className="w-5 h-5" />
          <span className="font-medium">Paramètres enregistrés avec succès !</span>
        </div>
      )}

      {/* Formulaire de paramètres */}
      <section className="py-8 sm:py-12 lg:py-16 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Notifications</h2>
                <p className="text-sm text-gray-600">Gérez vos préférences de notification</p>
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <div>
                  <span className="text-gray-800 font-medium">Notifications par email</span>
                  <p className="text-sm text-gray-500">Recevez des emails pour les événements importants</p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </div>
              </label>

              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <div>
                  <span className="text-gray-800 font-medium">Alertes de nouveaux vendeurs</span>
                  <p className="text-sm text-gray-500">Être notifié lors d'une nouvelle inscription</p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={vendorAlerts}
                    onChange={(e) => setVendorAlerts(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </div>
              </label>

              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <div>
                  <span className="text-gray-800 font-medium">Alertes de paiements</span>
                  <p className="text-sm text-gray-500">Être notifié des problèmes de paiement</p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={paymentAlerts}
                    onChange={(e) => setPaymentAlerts(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Sécurité</h2>
                <p className="text-sm text-gray-600">Modifiez votre mot de passe</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ancien mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    value={passwords.old}
                    onChange={(e) => setPasswords({...passwords, old: e.target.value})}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nouveau mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={passwords.new}
                    onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwords.new && passwords.new.length < 8 && (
                  <p className="text-xs text-red-600 mt-1">Le mot de passe doit contenir au moins 8 caractères</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwords.confirm && passwords.new !== passwords.confirm && (
                  <p className="text-xs text-red-600 mt-1">Les mots de passe ne correspondent pas</p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Email</h2>
                <p className="text-sm text-gray-600">Gérez votre adresse email</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                placeholder="admin@polymarket.com"
              />
            </div>
          </div>

          {/* Bouton sauvegarder */}
          <button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Enregistrer les modifications
          </button>
        </div>
      </section>
    </div>
  );
}