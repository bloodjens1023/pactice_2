import Headers from "./Headers";
import jsonData from '../assets/img/img.json'; 
function Accueil() {
    return ( 
        <>
            <Headers/>
            <img src={jsonData.imageURL} alt="Image" />
        </>
     );
}

export default Accueil;