import { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  // Liste de produits (données fictives)
  const allProducts = [
    { id: 1, name: "Robe en coton", price: 8000, category: "Vêtements", image: "/images/robe.jpeg" },
    { id: 2, name: "Montre connectée", price: 25000, category: "Accessoires", image: "/images/montre.jpeg" },
    { id: 3, name: "Smartphone X10", price: 120000, category: "Électroniques", image: "/images/phone.jpeg" },
    { id: 4, name: "Sac en cuir", price: 18000, category: "Accessoires", image: "/images/robe.jpeg" },
    { id: 5, name: "T-shirt coton bio", price: 6000, category: "Vêtements", image: "/images/robe.jpeg" },
  ];

  // États du filtrage
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("none");
  const [page, setPage] = useState(1);
  const productsPerPage = 4;

  // Filtrage logique
  const filtered = allProducts
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => (category === "Tous" ? true : p.category === category))
    .filter((p) => (minPrice ? p.price >= parseInt(minPrice) : true))
    .filter((p) => (maxPrice ? p.price <= parseInt(maxPrice) : true))
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  // Pagination
  const startIndex = (page - 1) * productsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  return (
    <div>
      <Navbar />

      {/* Barre de recherche */}
      <div className="container mx-auto mt-24 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="input input-bordered flex items-center gap-2 w-full md:w-1/3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un produit..."
              className="grow"
            />
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap items-center gap-3">
            <select
              className="select select-bordered"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Tous</option>
              <option>Vêtements</option>
              <option>Électroniques</option>
              <option>Accessoires</option>
            </select>

            <input
              type="number"
              placeholder="Prix min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="input input-bordered w-28"
            />

            <input
              type="number"
              placeholder="Prix max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="input input-bordered w-28"
            />

            <select
              className="select select-bordered"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Trier</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste des produits */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginated.length > 0 ? (
          paginated.map((p) => (
            <ProductCard 
              key={p.id} 
              id={p.id} 
              name={p.name} 
              price={p.price} 
              image={p.image} 
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Aucun produit trouvé.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 pb-8">
          <button
            className="btn btn-outline btn-sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Précédent
          </button>
          <span className="btn btn-disabled btn-sm">
            Page {page} / {totalPages}
          </span>
          <button
            className="btn btn-outline btn-sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}