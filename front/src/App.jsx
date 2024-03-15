import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import Paiement from './components/Paiement';
import Loading from './components/Loading';
import ValidPaiement from './components/ValidPaiement';




function App() {
  return (
    <Routes  >
      <Route path="/" Component={Accueil} />
      <Route path="/Connexion" Component={Connexion} />
      <Route path="/Inscription" Component={Inscription} />
      <Route path="/Paiement" Component={Paiement} />
      <Route path="/Loading" Component={Loading} />
      <Route path="/ValidPaiement" Component={ValidPaiement} />
    </Routes>
  )
}

export default App
