import React, { useState } from "react";
import {
  Edit,
  Trash2,
  Plus,
  ImageIcon,
  X,
  Upload,
} from "lucide-react";
import NavbarVendeur from "../../components/NavbarVendeur";

/* ===============================
   🔸 MODAL PRODUIT (ajout / édition)
   =============================== */
const ModalProduit = ({ produit, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    produit || {
      nom: "",
      description: "",
      categorie: "",
      prix: "",
      stock: "",
      sku: "",
      images: [],
    }
  );

  const categories = [
    "Mode & Vêtements",
    "Artisanat Local",
    "Électronique",
    "Alimentation",
    "Décoration",
    "Beauté & Cosmétiques",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (formData.images.length + files.length > 5) {
      alert("Maximum 5 images par produit");
      return;
    }
    const newImages = files.map((file, idx) => ({
      id: Date.now() + idx,
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setFormData({ ...formData, images: [...formData.images, ...newImages] });
  };

  const removeImage = (id) => {
    setFormData({
      ...formData,
      images: formData.images.filter((img) => img.id !== id),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {produit ? "✏️ Modifier le produit" : "➕ Ajouter un produit"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Nom & Description */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Nom du produit <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Ex: Tissu Kente Premium"
            />

            <label className="block text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Décrivez votre produit..."
            />
          </div>

          {/* Catégorie & SKU */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Catégorie
              </label>
              <select
                value={formData.categorie}
                onChange={(e) =>
                  setFormData({ ...formData, categorie: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Sélectionnez une catégorie</option>
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                SKU (Référence)
              </label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) =>
                  setFormData({ ...formData, sku: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Ex: KNT-001"
              />
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <ImageIcon className="w-5 h-5" /> Images (max 5)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {formData.images.map((img) => (
                <div key={img.id} className="relative group">
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {formData.images.length < 5 && (
                <label className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-xs text-gray-500 mt-2">Ajouter</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Prix & Stock */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Prix (FCFA)
              </label>
              <input
                type="number"
                value={formData.prix}
                onChange={(e) =>
                  setFormData({ ...formData, prix: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Ex: 25000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stock disponible
              </label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Ex: 15"
              />
            </div>
          </div>

          {/* Boutons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              {produit ? "Mettre à jour" : "Ajouter le produit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ===============================
   🔸 PAGE PRINCIPALE PRODUITS
   =============================== */
export default function ProduitsVendeur() {
  const [produits, setProduits] = useState([
    {
      id: 1,
      nom: "Tissu Kente Premium",
      prix: 25000,
      stock: 15,
      categorie: "Mode & Vêtements",
      images: [{ id: 1, url: "/images/robe.jpeg" }],
    },
    {
      id: 2,
      nom: "Vase Céramique Artisanal",
      prix: 15000,
      stock: 3,
      categorie: "Décoration",
      images: [{ id: 2, url: "/images/montre.jpeg" }],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [produitEdite, setProduitEdite] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarVendeur />

      <main className="container mx-auto px-6 py-24 mt-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🛍️ Mes Produits</h1>

        <button
          onClick={() => {
            setProduitEdite(null);
            setShowModal(true);
          }}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition mb-6"
        >
          <Plus className="w-5 h-5" /> Ajouter un produit
        </button>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produits.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.images?.[0]?.url || "/images/robe.jpeg"}
                alt={p.nom}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {p.nom}
                </h3>
                <p className="text-orange-600 font-bold">
                  {p.prix.toLocaleString()} FCFA
                </p>
                <p
                  className={`text-sm mt-1 ${
                    p.stock < 5 ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  Stock: {p.stock}
                </p>
                <div className="flex gap-2 mt-4 border-t pt-3">
                  <button
                    onClick={() => {
                      setProduitEdite(p);
                      setShowModal(true);
                    }}
                    className="flex-1 text-blue-600 hover:bg-blue-50 py-2 rounded-lg"
                  >
                    <Edit className="w-4 h-4 inline mr-1" />
                    Modifier
                  </button>
                  <button
                    onClick={() =>
                      setProduits(produits.filter((x) => x.id !== p.id))
                    }
                    className="flex-1 text-red-600 hover:bg-red-50 py-2 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4 inline mr-1" />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showModal && (
        <ModalProduit
          produit={produitEdite}
          onClose={() => setShowModal(false)}
          onSave={(data) => {
            if (produitEdite) {
              setProduits(
                produits.map((p) => (p.id === produitEdite.id ? data : p))
              );
            } else {
              setProduits([...produits, { ...data, id: Date.now() }]);
            }
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
