import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Bloc 1 : Logo et description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">PolyMarket</h3>
            <p className="text-gray-400 mb-4">
              Votre marketplace locale de confiance. Achetez, vendez et soutenez vos commerçants de proximité.
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-full hover:bg-gray-800 transition">
                <Facebook className="h-5 w-5 text-white" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition">
                <Twitter className="h-5 w-5 text-white" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition">
                <Instagram className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Bloc 2 : Liens rapides */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="/produits" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
              <li><a href="/promotions" className="text-gray-400 hover:text-white transition-colors">Promotions</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Aide</a></li>
            </ul>
          </div>

          {/* Bloc 3 : Service client */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Service Client</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Retours</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition-colors">Livraison</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions</a></li>
            </ul>
          </div>

          {/* Bloc 4 : Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Restez informé des dernières offres et nouveautés.
            </p>

            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                S'abonner
              </button>
            </div>

            <div className="space-y-2 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+221 77 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@polymarket.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-3 md:mb-0">
            © 2025 <span className="text-white font-semibold">PolyMarket</span> — Tous droits réservés.
          </p>

          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="/terms" className="hover:text-white transition-colors">Conditions</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
