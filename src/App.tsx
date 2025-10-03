// ✅ src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Panier from "./pages/Cart";
import DashboardVendeur from "./pages/vendeur/DashboardVendeur";
import CommandesVendeur from "./pages/vendeur/CommandesVendeur";
import CommissionsVendeur from "./pages/vendeur/CommissionsVendeur";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Panier : accessible uniquement si connecté */}
        <Route
          path="/panier"
          element={
            <ProtectedRoute>
              <Panier />
            </ProtectedRoute>
          }
        />

        {/* Espace vendeur : accès uniquement aux vendeurs */}
        <Route
          path="/vendeur/dashboard"
          element={
            <ProtectedRoute role="vendeur">
              <DashboardVendeur />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendeur/commandes"
          element={
            <ProtectedRoute role="vendeur">
              <CommandesVendeur />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendeur/commissions"
          element={
            <ProtectedRoute role="vendeur">
              <CommissionsVendeur />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
