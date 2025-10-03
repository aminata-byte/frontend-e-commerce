// ✅ src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  // On récupère l'utilisateur stocké dans le localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Si aucun utilisateur connecté → rediriger vers /login
  if (!user) {
    alert("⚠️ Vous devez vous connecter pour accéder à cette page !");
    return <Navigate to="/login" replace />;
  }

  // Si un rôle spécifique est exigé (ex: vendeur)
  if (role && user.role !== role) {
    alert("⛔ Accès refusé !");
    return <Navigate to="/" replace />;
  }

  // Sinon, on affiche le contenu autorisé
  return children;
}
