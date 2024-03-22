import  Nav from "./Nav";
import Post from "./Post";
const evenements = [
    {
        nom: "Conférence annuelle",
        description: "Conférence rassemblant des experts du domaine pour discuter des dernières avancées et tendances.",
        date: "2024-04-10"
    },
    {
        nom: "Festival de musique",
        description: "Un événement en plein air avec une gamme diversifiée d'artistes et de genres musicaux.",
        date: "2024-06-22"
    },
    {
        nom: "Exposition d'art",
        description: "Présentation d'œuvres d'artistes locaux et internationaux dans différents médiums artistiques.",
        date: "2024-07-15"
    },
    {
        nom: "Course caritative",
        description: "Une course organisée pour collecter des fonds pour une cause spécifique, telle que la lutte contre la faim ou la recherche médicale.",
        date: "2024-09-08"
    },
    {
        nom: "Séminaire professionnel",
        description: "Un événement axé sur le développement des compétences et le réseautage dans un domaine professionnel particulier.",
        date: "2024-10-30"
    },
    {
        nom: "Salon du livre",
        description: "Un rassemblement d'auteurs, d'éditeurs et de lecteurs pour célébrer la littérature et encourager la lecture.",
        date: "2024-11-25"
    },
    {
        nom: "Tournoi sportif",
        description: "Une compétition sportive où des équipes s'affrontent dans différents sports pour remporter des prix.",
        date: "2024-12-12"
    },
    {
        nom: "Gala de charité",
        description: "Une soirée de collecte de fonds comprenant des enchères, des performances artistiques et des discours pour soutenir une cause charitable.",
        date: "2024-12-31"
    }
];


function Evenement() {
    return ( 
        <div className="container-fluid">  
            <div className="row">
                <div className="col-md-3">
                    <Nav />
                </div>
                
                <div className="col-md-9">
                    {evenements.map(evenement => (
                            <Post evenements={evenement} key={evenement.nom}  />
                    ))}
                </div>
            </div>

            
        </div>
     );
}

export default Evenement;