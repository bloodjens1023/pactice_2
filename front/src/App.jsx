import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import Paiement from './components/Paiement';
import Loading from './components/Loading';
import ValidPaiement from './components/ValidPaiement';
import Produits from './components/Produit';
import Profil from './components/Profil';
import Paniers from './components/Paniers';
import Cook from './components/Cook';




function App() {
  return (
    <Routes  >
      <Route path="/" Component={Accueil} />
      <Route path="/Connexion" Component={Connexion} />
      <Route path="/Inscription" Component={Inscription} />
      <Route path="/Paiement" Component={Paiement} />
      <Route path="/Loading" Component={Loading} />
      <Route path="/ValidPaiement" Component={ValidPaiement} />
      <Route path="/Produits" Component={Produits} />
      <Route path="/Profil" Component={Profil} />
      <Route path="/Paniers" Component={Paniers} />
      <Route path="/Cookies" Component={Cook} />

    </Routes>
  )
}

export default App
