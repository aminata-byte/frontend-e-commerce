import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔐 Identifiants admin simulés
  const ADMIN_EMAIL = "admin@polymarket.com";
  const ADMIN_PASS = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      localStorage.setItem(
        "admin",
        JSON.stringify({ email, role: "admin", isAuthenticated: true })
      );
      alert("Connexion administrateur réussie ✅");
      navigate("/admin/dashboard");
    } else {
      alert("Email ou mot de passe incorrect ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <ShieldCheck className="w-12 h-12 text-orange-600 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Espace Admin</h1>
          <p className="text-sm text-gray-500">Connectez-vous à votre tableau de bord</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@polymarket.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-medium py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
