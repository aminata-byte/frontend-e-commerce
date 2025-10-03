import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Search, Filter, X } from "lucide-react";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "Toutes les catégories", count: 1200, icon: "🏪" },
    { id: "artisanat", name: "Artisanat", count: 250, icon: "🎨" },
    { id: "alimentation", name: "Alimentation", count: 180, icon: "🍎" },
    { id: "vetements", name: "Vêtements", count: 320, icon: "👕" },
    { id: "decoration", name: "Décoration", count: 150, icon: "🏺" },
    { id: "bijoux", name: "Bijoux", count: 95, icon: "💎" },
    { id: "electronique", name: "Électronique", count: 120, icon: "📱" },
    { id: "beaute", name: "Beauté", count: 85, icon: "💄" },
    { id: "maison", name: "Maison", count: 200, icon: "🏠" },
  ];

  const products = [
    { id: 1, name: "Robe en coton", price: 8000, category: "vetements", image: "/images/robe.jpeg" },
    { id: 2, name: "Montre connectée", price: 25000, category: "electronique", image: "/images/montre.jpeg" },
    { id: 3, name: "Smartphone X10", price: 120000, category: "electronique", image: "/images/phone.jpeg" },
    { id: 4, name: "Tissu Kente", price: 15000, category: "artisanat", image: "/images/robe.jpeg" },
  ];

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "all" || p.category === selectedCategory) &&
      (minPrice ? p.price >= parseInt(minPrice) : true) &&
      (maxPrice ? p.price <= parseInt(maxPrice) : true)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* En-tête avec dégradé */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 text-white py-16 sm:py-20 lg:py-24 text-center mt-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Catégories de Produits
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Explorez nos différentes catégories pour trouver les produits que vous aimez.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Bouton filtres mobile */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            <Filter className="w-5 h-5" />
            {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          
          {/* Filtres - Sidebar */}
          <aside className={`
            ${showFilters ? "block" : "hidden"} lg:block
            bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 lg:mb-0
          `}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                <Filter className="w-5 h-5 text-orange-600" /> Filtres
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Recherche */}
            <div className="mb-5 relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-10 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            {/* Liste des catégories */}
            <div className="space-y-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowFilters(false);
                  }}
                  className={`flex justify-between items-center w-full p-3 rounded-lg text-sm transition ${
                    selectedCategory === cat.id
                      ? "bg-orange-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>
                    {cat.icon} {cat.name}
                  </span>
                  <span className={`text-xs ${selectedCategory === cat.id ? "text-white/80" : "text-gray-500"}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Prix */}
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800">Prix (FCFA)</h4>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>
          </aside>

          {/* Produits */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold">
                {selectedCategory === "all"
                  ? "Tous les Produits"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((p) => (
                  <ProductCard 
                    key={p.id} 
                    id={p.id} 
                    name={p.name} 
                    price={p.price} 
                    image={p.image} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-base sm:text-lg">
                  Aucun produit trouvé pour cette catégorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}