import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState(""); // 🏠 Nouveau champ
  const [role, setRole] = useState("client"); // client ou vendeur
  const navigate = useNavigate();

  // 🔹 Simulation de la connexion / inscription
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && (!nom || !telephone || !adresse))) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (isLogin) {
      // Simulation de connexion
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (user && user.email === email && user.password === password) {
        alert("Connexion réussie ✅");
        if (user.role === "vendeur") navigate("/vendeur/dashboard");
        else navigate("/");
      } else {
        alert("Email ou mot de passe incorrect !");
      }
    } else {
      // Simulation d’inscription
      const newUser = { nom, email, telephone, adresse, password, role };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Compte créé avec succès 🎉");
      setIsLogin(true);
      setEmail("");
      setPassword("");
      setNom("");
      setTelephone("");
      setAdresse("");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center mt-24 bg-base-100">
        <div className="card w-full max-w-md bg-base-200 shadow-xl p-6">
          {/* 🔹 Onglets connexion / inscription */}
          <div className="tabs tabs-boxed mb-6">
            <button
              className={`tab flex-1 ${isLogin ? "tab-active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Connexion
            </button>
            <button
              className={`tab flex-1 ${!isLogin ? "tab-active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Inscription
            </button>
          </div>

          {/* 🔹 Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                {/* Nom complet */}
                <div>
                  <label className="label">
                    <span className="label-text">Nom complet</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Entrez votre nom complet"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="label">
                    <span className="label-text">Téléphone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex : +221771234567"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="input input-bordered w-full"
                    pattern="^\+?[0-9]{8,15}$"
                    title="Numéro de téléphone valide requis"
                    required
                  />
                </div>

                {/* Adresse */}
                <div>
                  <label className="label">
                    <span className="label-text">Adresse complète</span>
                  </label>
                  <textarea
                    placeholder="Rue, ville, région..."
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    required
                  ></textarea>
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Adresse email</span>
              </label>
              <input
                type="email"
                placeholder="exemple@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Rôle */}
            {!isLogin && (
              <div>
                <label className="label">
                  <span className="label-text">Rôle</span>
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="select select-bordered w-full"
                >
                  <option value="client">Client</option>
                  <option value="vendeur">Vendeur</option>
                </select>
              </div>
            )}

            {/* Bouton */}
            <button type="submit" className="btn btn-primary w-full text-white">
              {isLogin ? "Se connecter" : "Créer un compte"}
            </button>

            {/* 🔹 Bascule */}
            <p className="text-center text-sm mt-2">
              {isLogin ? (
                <>
                  Pas encore de compte ?{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => setIsLogin(false)}
                  >
                    Inscrivez-vous ici
                  </span>
                </>
              ) : (
                <>
                  Déjà un compte ?{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => setIsLogin(true)}
                  >
                    Connectez-vous ici
                  </span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
