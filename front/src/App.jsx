import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import Accueil from "./components/Accueil";
import Paiement from "./components/Paiement";
import Loading from "./components/Loading";
import ValidPaiement from "./components/ValidPaiement";
import Produits from "./components/Produit";
import Profil from "./components/Profil";
import Paniers from "./components/Paniers";
import Cook from "./components/Cook";
import Dashboard from "./components/Dashboard";
import Model from "./components/Model";
import Research from "./components/Research";
import Pricing from "./components/Pricing";
import Test from "./components/test";
import PlanPerso1 from "./components/PlanPerso1";
import Homepage from "../../front2/src/Accueil/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/Connexion" Component={Connexion} />
      <Route path="/Inscription" Component={Inscription} />
      <Route path="/Paiement" Component={Paiement} />
      <Route path="/Loading" Component={Loading} />
      <Route path="/ValidPaiement" Component={ValidPaiement} />
      <Route path="/Produits" Component={Produits} />
      <Route path="/Profil" Component={Profil} />
      <Route path="/Paniers" Component={Paniers} />
      <Route path="/Cookies" Component={Cook} />
      <Route path="/Dash" Component={Dashboard} />
      <Route path="/Model" Component={Model} />
      <Route path="/Research" Component={Research} />
      <Route path="/Pricing" Component={Pricing} />
      <Route path="/Test" Component={Test} />
      <Route path="/plan1" Component={PlanPerso1} />
    </Routes>
  );
}

export default App;
