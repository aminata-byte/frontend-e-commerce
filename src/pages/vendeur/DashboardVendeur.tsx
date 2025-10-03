import NavbarVendeur from "../../components/NavbarVendeur";


export default function DashboardVendeur() {
  return (
    <>
      <NavbarVendeur />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center sm:text-left">
          Tableau de bord vendeur
        </h1>

        {/* Statistiques principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h2 className="text-sm text-gray-500">Produits</h2>
            <p className="text-3xl font-semibold text-primary">125</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h2 className="text-sm text-gray-500">Ventes</h2>
            <p className="text-3xl font-semibold text-primary">230</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h2 className="text-sm text-gray-500">Revenus</h2>
            <p className="text-3xl font-semibold text-primary">4,500 €</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h2 className="text-sm text-gray-500">Commandes en attente</h2>
            <p className="text-3xl font-semibold text-primary">8</p>
          </div>
        </div>

        {/* Commandes récentes + Produits populaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Commandes récentes */}
          <div className="bg-white p-6 shadow rounded-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Commandes récentes
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div
                  key={order}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      Commande #{order} — Client {order}
                    </p>
                    <p className="text-sm text-gray-500">02 Octobre 2025</p>
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    Livrée
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Produits populaires */}
          <div className="bg-white p-6 shadow rounded-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Produits populaires
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((product) => (
                <div
                  key={product}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://picsum.photos/seed/${product}/80/80`}
                      alt={`Produit ${product}`}
                      className="w-16 h-16 sm:w-12 sm:h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        Produit {product}
                      </p>
                      <p className="text-sm text-gray-500">Vendu : 50</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    25 €
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
