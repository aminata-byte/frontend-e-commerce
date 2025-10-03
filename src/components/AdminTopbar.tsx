import { Bell, Search } from "lucide-react";
import { useState } from "react";

export default function AdminTopbar() {
  const [q, setQ] = useState("");
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold text-gray-800">Admin</div>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 gap-2">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher (commandes, vendeurs...)"
            className="bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-700">Admin</div>
          <img src="/images/avatar-placeholder.png" alt="admin" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </div>
    </header>
  );
}
