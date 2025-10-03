import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Pages principales
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Vendeurs from "./pages/Vendeurs";   // 🧍‍♂️ Page des vendeurs
import Promotions from "./pages/Promotions";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ConfirmationCommande from "./pages/ConfirmationCommande";
import Commandes from "./pages/Commandes";
import About from "./pages/About";
import Favoris from "./pages/Favoris";
import NotFound from "./pages/NotFound";
import Profil from "./pages/Profil";


// 🧩 Espace Vendeur
import DashboardVendeur from "./pages/vendeur/DashboardVendeur";
import CommandesVendeur from "./pages/vendeur/CommandesVendeur";
import ProduitsVendeur from "./pages/vendeur/ProduitsVendeur";
import CommissionsVendeur from "./pages/vendeur/CommissionsVendeur";


// espace admin
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import VendorsValidation from "./pages/admin/VendorsValidation";
import PaymentsAdmin from "./pages/admin/PaymentsAdmin";
import NotificationsAdmin from "./pages/admin/NotificationsAdmin";
import PaymentDetailAdmin from "./pages/admin/PaymentDetailAdmin";

import SignalementPaiement from "./pages/vendeur/SignalementPaiement";





createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🏠 Accueil */}
        <Route path="/" element={<Home />} />

        {/* 🛍️ Produits */}
        <Route path="/produits" element={<Products />} />

        {/* 📂 Catégories */}
        <Route path="/categories" element={<Categories />} />

        {/* 🧍‍♂️ Vendeurs */}
        <Route path="/vendeurs" element={<Vendeurs />} />

        {/* 💸 Promotions */}
        <Route path="/promotions" element={<Promotions />} />

        {/* 📞 Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 🛒 Panier */}
        <Route path="/panier" element={<Cart />} />

        {/* 🔐 Connexion */}
        <Route path="/login" element={<Login />} />
        <Route path="/produit/:id" element={<ProductDetail />} />

        {/* ✅ Commandes client */}
        <Route path="/confirmation" element={<ConfirmationCommande />} />
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/favoris" element={<Favoris />} />

        {/* 💼 Espace Vendeur */}
        <Route path="/vendeur/dashboard" element={<DashboardVendeur />} />
        <Route path="/vendeur/commandes" element={<CommandesVendeur />} />
        <Route path="/vendeur/produits" element={<ProduitsVendeur />} />
        <Route path="/vendeur/commissions" element={<CommissionsVendeur />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profil" element={<Profil />} />


        {/* Admin */}
<Route path="/admin/dashboard" element={<DashboardAdmin />} />
<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<DashboardAdmin />} />
  <Route path="vendeurs" element={<VendorsValidation />} />
  <Route path="paiements" element={<PaymentsAdmin />} />
  <Route path="notifications" element={<NotificationsAdmin />} />
</Route>

<Route path="/admin/paiement/:id" element={<PaymentDetailAdmin />} />


<Route path="/vendeur/signalement" element={<SignalementPaiement />} />



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
