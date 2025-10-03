import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart, Heart, Star, MapPin, Package, Shield } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Données fictives (à remplacer par API)
  const product = {
    id: 1,
    name: "Tissu Kente Premium Traditionnel",
    price: 25000,
    oldPrice: 30000,
    description: "Magnifique tissu Kente tissé à la main par des artisans locaux. Couleurs vibrantes et motifs authentiques. Idéal pour les occasions spéciales, cérémonies traditionnelles ou décoration d'intérieur.",
    images: [
      "/images/robe.jpeg",
      "/images/montre.jpeg",
      "/images/phone.jpeg",
    ],
    stock: 15,
    category: "Artisanat",
    vendor: {
      name: "Artisanat Kofi",
      rating: 4.8,
      reviews: 127,
      location: "Dakar, Sénégal",
      responseTime: "< 2h",
      products: 45
    },
    specs: [
      { label: "Matériau", value: "Coton tissé" },
      { label: "Dimensions", value: "2m x 1.5m" },
      { label: "Origine", value: "Sénégal" },
      { label: "Entretien", value: "Lavage à la main" }
    ]
  };

  const relatedProducts = [
    { id: 2, name: "Vase Céramique", price: 15000, image: "/images/montre.jpeg" },
    { id: 3, name: "Panier Tressé", price: 8000, image: "/images/phone.jpeg" },
    { id: 4, name: "Sculpture Bois", price: 18000, image: "/images/robe.jpeg" }
  ];

  const handleAddToCart = () => {
    alert(`${quantity} article(s) ajouté(s) au panier`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/categories">Catégories</Link></li>
            <li><Link to={`/categories/${product.category}`}>{product.category}</Link></li>
            <li className="font-semibold">{product.name}</li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galerie Images */}
          <div>
            {/* Image principale */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Miniatures */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index
                      ? "border-orange-600"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informations Produit */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-orange-600">
                  {product.price.toLocaleString()} FCFA
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {product.oldPrice.toLocaleString()} FCFA
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Caractéristiques */}
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Caractéristiques</h3>
                <div className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className="text-gray-800 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">{product.stock}</span> en stock
                </span>
              </div>

              {/* Quantité et Achat */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn btn-primary text-white flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ajouter au panier
                </button>

                <button className="btn btn-ghost">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Garanties */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Paiement sécurisé à la livraison</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Package className="w-4 h-4 text-green-600" />
                  <span>Livraison sous 2-3 jours ouvrés</span>
                </div>
              </div>
            </div>

            {/* Infos Vendeur */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Informations Vendeur</h3>
              
              <Link to={`/vendeurs/${product.vendor.name}`} className="block hover:bg-gray-50 rounded-lg p-3 -m-3 transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{product.vendor.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{product.vendor.rating}</span>
                      <span className="text-sm text-gray-500">({product.vendor.reviews} avis)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{product.vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span>{product.vendor.products} produits</span>
                  </div>
                  <div className="text-xs text-green-600">
                    ⚡ Répond en {product.vendor.responseTime}
                  </div>
                </div>
              </Link>

              <button className="btn btn-outline w-full mt-4">
                Voir tous les produits
              </button>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/produit/${item.id}`}
                className="card bg-base-100 shadow-md hover:shadow-xl transition"
              >
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-orange-600 font-bold">
                    {item.price.toLocaleString()} FCFA
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}