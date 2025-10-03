import { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin, Edit3, Save } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profil() {
  // 🔹 Récupération des infos utilisateur (mockées ou depuis localStorage)
  const [user, setUser] = useState({
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Simulation des données utilisateur
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser({
      nom: storedUser.nom || "Aminata Diane",
      email: storedUser.email || "aminata@example.com",
      telephone: storedUser.telephone || "+221 77 123 45 67",
      adresse: storedUser.adresse || "Dakar, Sénégal",
    });
  }, []);

  // 🔹 Gestion des modifications
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditing(false);
    alert("✅ Profil mis à jour avec succès !");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">👤 Mon Profil</h1>

        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-4xl font-bold">
              {user.nom.charAt(0)}
            </div>
            <h2 className="text-2xl font-semibold mt-4">{user.nom}</h2>
            <p className="text-gray-600">Client fidèle 🌟</p>
          </div>

          <div className="space-y-6">
            {/* Nom */}
            <div className="flex items-center gap-3">
              <User className="text-orange-500 w-5 h-5" />
              <input
                type="text"
                name="nom"
                value={user.nom}
                disabled={!editing}
                onChange={handleChange}
                className={`flex-1 border-b p-2 outline-none ${
                  editing
                    ? "border-orange-400 bg-orange-50"
                    : "border-transparent bg-transparent"
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={user.email}
                disabled={!editing}
                onChange={handleChange}
                className={`flex-1 border-b p-2 outline-none ${
                  editing
                    ? "border-orange-400 bg-orange-50"
                    : "border-transparent bg-transparent"
                }`}
              />
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 w-5 h-5" />
              <input
                type="text"
                name="telephone"
                value={user.telephone}
                disabled={!editing}
                onChange={handleChange}
                className={`flex-1 border-b p-2 outline-none ${
                  editing
                    ? "border-orange-400 bg-orange-50"
                    : "border-transparent bg-transparent"
                }`}
              />
            </div>

            {/* Adresse */}
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500 w-5 h-5" />
              <input
                type="text"
                name="adresse"
                value={user.adresse}
                disabled={!editing}
                onChange={handleChange}
                className={`flex-1 border-b p-2 outline-none ${
                  editing
                    ? "border-orange-400 bg-orange-50"
                    : "border-transparent bg-transparent"
                }`}
              />
            </div>
          </div>

          {/* Boutons d’action */}
          <div className="flex justify-end mt-8 gap-4">
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                <Edit3 className="w-4 h-4" /> Modifier
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Save className="w-4 h-4" /> Sauvegarder
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
