import { useState } from "react";
import { ShoppingCart, Search, Heart, Menu, X, User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [spaceMenuOpen, setSpaceMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">PolyMarket</span>
          </a>

          {/* Barre de recherche centrale - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
              Accueil
            </a>
            <a href="/categories" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
              Catégories
            </a>

            {/* Menu Espaces */}
            <div className="relative">
              <button
                onClick={() => setSpaceMenuOpen(!spaceMenuOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
              >
                <span>Espaces</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${spaceMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {spaceMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setSpaceMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20">
                    <a
                      href="/profil"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                      onClick={() => setSpaceMenuOpen(false)}
                    >
                      Espace Client
                    </a>
                    <a
                      href="/vendeur/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                      onClick={() => setSpaceMenuOpen(false)}
                    >
                      Espace Vendeur
                    </a>
                    <a
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 transition"
                      onClick={() => setSpaceMenuOpen(false)}
                    >
                      Espace Admin
                    </a>
                  </div>
                </>
              )}
            </div>

            <a href="/favoris" className="text-gray-700 hover:text-orange-500 transition">
              <Heart className="w-5 h-5" />
            </a>

            <a href="/panier" className="relative text-gray-700 hover:text-orange-500 transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </a>

            <a
              href="/login"
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:from-orange-600 hover:to-pink-600 transition"
            >
              <User className="w-4 h-4" />
              <span>Connexion</span>
            </a>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            
            {/* Recherche Mobile */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <a href="/" className="block text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Accueil
            </a>
            <a href="/categories" className="block text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Catégories
            </a>
            <a href="/a-propos" className="block text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              À propos
            </a>
            <a href="/contact" className="block text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <div className="border-t border-gray-100 my-2"></div>

            <a href="/profil" className="block text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Espace Client
            </a>
            <a href="/vendeur/dashboard" className="block text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Espace Vendeur
            </a>
            <a href="/admin/dashboard" className="block text-sm font-medium text-orange-600" onClick={() => setMenuOpen(false)}>
              Espace Admin
            </a>

            <div className="border-t border-gray-100 my-2"></div>

            <a href="/favoris" className="flex items-center space-x-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              <Heart className="w-4 h-4" />
              <span>Favoris</span>
            </a>
            <a href="/panier" className="flex items-center space-x-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              <ShoppingCart className="w-4 h-4" />
              <span>Panier</span>
            </a>

            <a
              href="/login"
              className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg mt-3"
              onClick={() => setMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>Connexion</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}