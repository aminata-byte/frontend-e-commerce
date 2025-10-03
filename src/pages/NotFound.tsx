import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24">
        <AlertTriangle className="w-20 h-20 text-orange-500 mb-6" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oups ! Page introuvable
        </h2>
        <p className="text-gray-500 max-w-md mb-6">
          La page que vous cherchez semble avoir été déplacée ou n’existe pas.
        </p>

        <Link
          to="/"
          className="btn btn-primary text-white px-6 py-3 rounded-lg hover:shadow-md transition"
        >
          Retour à l’accueil
        </Link>
      </div>

      <Footer />
    </div>
  );
}
