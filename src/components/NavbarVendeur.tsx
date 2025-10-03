import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavbarVendeur() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <Link
          to="/vendeur/dashboard"
          className="text-xl font-bold text-gray-800"
        >
          Espace Vendeur 🧺
        </Link>

        {/* 🔹 Bouton menu burger (mobile uniquement) */}
        <button
          className="text-gray-700 text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔹 Liens Desktop */}
        <div className="hidden md:flex space-x-6 font-medium text-sm items-center">
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

          <button
            onClick={handleLogout}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Se déconnecter
          </button>
        </div>
      </div>

      {/* 🔹 Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-3 text-sm font-medium">
          <Link
            to="/vendeur/dashboard"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive("/vendeur/dashboard")}`}
          >
            📊 Tableau de bord
          </Link>
          <Link
            to="/vendeur/produits"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive("/vendeur/produits")}`}
          >
            🛍️ Produits
          </Link>
          <Link
            to="/vendeur/commandes"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive("/vendeur/commandes")}`}
          >
            📦 Commandes
          </Link>
          <Link
            to="/vendeur/commissions"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive("/vendeur/commissions")}`}
          >
            💰 Commissions
          </Link>
          <Link
            to="/vendeur/signalement"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive("/vendeur/signalement")}`}
          >
            💳 Signalement
          </Link>

          <button
            onClick={handleLogout}
            className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Se déconnecter
          </button>
        </div>
      )}
    </nav>
  );
}
