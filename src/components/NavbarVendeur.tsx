import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarVendeur() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-orange-600 border-b-2 border-orange-600"
      : "text-gray-600 hover:text-orange-500";

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Déconnexion réussie ✅");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* 🔹 Logo */}
        <Link to="/vendeur/dashboard" className="text-xl font-bold text-gray-800">
          Espace Vendeur 🧺
        </Link>

        {/* 🔹 Liens de navigation */}
        <div className="flex space-x-6 font-medium text-sm">
          <Link to="/vendeur/dashboard" className={isActive("/vendeur/dashboard")}>
            📊 Tableau de bord
          </Link>
          <Link to="/vendeur/produits" className={isActive("/vendeur/produits")}>
            🛍️ Produits
          </Link>
          <Link to="/vendeur/commandes" className={isActive("/vendeur/commandes")}>
            📦 Commandes
          </Link>
          <Link to="/vendeur/commissions" className={isActive("/vendeur/commissions")}>
            💰 Commissions
          </Link>

          <Link to="/vendeur/signalement" className={isActive("/vendeur/signalement")}>
  💳 Signalement
</Link>

        </div>

        {/* 🔹 Déconnexion */}
        <button
          onClick={handleLogout}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Se déconnecter
        </button>
      </div>
    </nav>
  );
}
