import { Link } from "react-router-dom";
import Headers from "./Headers";
import Cookies from "js-cookie";
function Accueil() {
    const userToken = Cookies.get("user_token");
    return ( 
        <>
            <Link to="Inscription">Inscrire</Link>
            <p>bonjour {userToken}</p>
        </>
     );
}

export default Accueil;