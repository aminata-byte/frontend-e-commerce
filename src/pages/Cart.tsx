import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  // Données fictives regroupées par vendeur
  const [cart, setCart] = useState([
    {
      vendor: "Artisanat Kofi",
      items: [
        {
          id: 1,
          name: "Tissu Kente Premium",
          price: 15000,
          quantity: 2,
          image: "/images/robe.jpeg",
        },
        {
          id: 2,
          name: "Panier tressé",
          price: 8000,
          quantity: 1,
          image: "/images/montre.jpeg",
        },
      ],
    },
    {
      vendor: "Poterie Ama",
      items: [
        {
          id: 3,
          name: "Vase Céramique",
          price: 12000,
          quantity: 1,
          image: "/images/phone.jpeg",
        },
      ],
    },
  ]);

  const [deliveryMode, setDeliveryMode] = useState("pickup");

  // Changer la quantité
  const updateQuantity = (vendorName: string, itemId: number, delta: number) => {
    setCart((prev) =>
      prev.map((vendor) =>
        vendor.vendor === vendorName
          ? {
              ...vendor,
              items: vendor.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      quantity: Math.max(1, item.quantity + delta),
                    }
                  : item
              ),
            }
          : vendor
      )
    );
  };

  // Supprimer un article
  const removeItem = (vendorName: string, itemId: number) => {
    setCart((prev) =>
      prev
        .map((vendor) => ({
          ...vendor,
          items: vendor.items.filter((item) => item.id !== itemId),
        }))
        .filter((vendor) => vendor.items.length > 0)
    );
  };

  // Calculs
  const getVendorSubtotal = (vendor: any) =>
    vendor.items.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);

  const total = cart.reduce(
    (sum, vendor) => sum + getVendorSubtotal(vendor),
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">
          Votre Panier
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-6">
              Votre panier est vide pour le moment.
            </p>
            <Link
              to="/produits"
              className="btn btn-primary text-white"
            >
              Découvrir des produits
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Liste des vendeurs */}
            <div className="lg:col-span-2 space-y-10">
              {cart.map((vendor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {vendor.vendor}
                  </h2>

                  {vendor.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b border-gray-100 py-4 last:border-0"
                    >
                      {/* Image + Infos */}
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-orange-600 font-medium">
                            {item.price.toLocaleString()} FCFA
                          </p>
                        </div>
                      </div>

                      {/* Quantité + Supprimer */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(vendor.vendor, item.id, -1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(vendor.vendor, item.id, 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(vendor.vendor, item.id)}
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Sous-total vendeur */}
                  <div className="text-right font-semibold text-gray-700 mt-4">
                    Sous-total :{" "}
                    <span className="text-orange-600">
                      {getVendorSubtotal(vendor).toLocaleString()} FCFA
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Résumé global */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Récapitulatif
              </h2>

              {/* Mode de récupération */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Mode de récupération :
                </h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryMode"
                      value="pickup"
                      checked={deliveryMode === "pickup"}
                      onChange={() => setDeliveryMode("pickup")}
                      className="radio radio-primary"
                    />
                    <span className="text-gray-700 font-medium">
                      Retrait sur place (gratuit)
                    </span>
                  </label>

                  <label className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryMode"
                      value="delivery"
                      checked={deliveryMode === "delivery"}
                      onChange={() => setDeliveryMode("delivery")}
                      className="radio radio-primary"
                    />
                    <span className="text-gray-700 font-medium">
                      Livraison à domicile
                    </span>
                  </label>
                </div>

                <p className="text-xs text-gray-500 mt-3 italic">
                  Les frais de livraison sont à régler directement au livreur lors de la réception.
                </p>
              </div>

              {/* Total */}
              <div className="flex justify-between text-lg font-bold text-gray-900 mb-6 border-t pt-4">
                <span>Total</span>
                <span className="text-orange-600">{total.toLocaleString()} FCFA</span>
              </div>

              <Link
                to="/confirmation"
                state={{ 
                  total, 
                  deliveryMode,
                  orderNumber: `CMD${Date.now()}`,
                  cart
                }}
                className="btn btn-primary w-full text-white"
              >
                Passer la commande
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}