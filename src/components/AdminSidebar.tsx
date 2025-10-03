import { Link, useLocation } from "react-router-dom";
import {
  Grid,
  Users,
  CreditCard,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const NavItem = ({ to, label, icon }: { to: string; label: string; icon: React.ReactNode }) => {
  const location = useLocation();
  const active = location.pathname.startsWith(to);
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
        active ? "bg-orange-50 text-orange-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden lg:block">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800">Admin • PolyMarket</h2>
        <p className="text-sm text-gray-500 mt-1">Tableau de bord</p>
      </div>

      <nav className="space-y-1">
        <NavItem to="/admin" label="Dashboard" icon={<Grid className="w-5 h-5" />} />
        <NavItem to="/admin/vendeurs" label="Validations Vendeurs" icon={<Users className="w-5 h-5" />} />
        <NavItem to="/admin/paiements" label="Commissions & Paiements" icon={<CreditCard className="w-5 h-5" />} />
        <NavItem to="/admin/notifications" label="Notifications" icon={<Bell className="w-5 h-5" />} />
        <NavItem to="/admin/settings" label="Paramètres" icon={<Settings className="w-5 h-5" />} />
      </nav>

      <div className="mt-6">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-600 hover:bg-red-50">
          <LogOut className="w-5 h-5" />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
