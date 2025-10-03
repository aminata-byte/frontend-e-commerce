import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, DollarSign } from "lucide-react";

export default function VendeurSidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Tableau de bord", path: "/vendeur/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Produits", path: "/vendeur/produits", icon: <Package className="w-5 h-5" /> },
    { name: "Commandes", path: "/vendeur/commandes", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Commissions", path: "/vendeur/commissions", icon: <DollarSign className="w-5 h-5" /> },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 min-h-screen p-6 fixed left-0 top-0 hidden md:block">
      <h2 className="text-2xl font-bold text-orange-600 mb-10 text-center">Espace Vendeur</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive
                  ? "bg-orange-100 text-orange-700 border-l-4 border-orange-500"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
