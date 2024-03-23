import { useState } from "react";
import Nav from "./Nav";
import Post from "./Post";
import Weather from "./Weather";
import Load from "./Load";
import Headers from "./Headers";
import { motion } from "framer-motion";
import Events from "./Events";

const evenements = [
  {
    nom: "Conférence annuelle",
    description:
      "Conférence rassemblant des experts du domaine pour discuter des dernières avancées et tendances.",
    date: "2024-04-10",
  },
  {
    nom: "Festival de musique",
    description:
      "Un événement en plein air avec une gamme diversifiée d'artistes et de genres musicaux.",
    date: "2024-06-22",
  },
  {
    nom: "Exposition d'art",
    description:
      "Présentation d'œuvres d'artistes locaux et internationaux dans différents médiums artistiques.",
    date: "2024-07-15",
  },
  {
    nom: "Course caritative",
    description:
      "Une course organisée pour collecter des fonds pour une cause spécifique, telle que la lutte contre la faim ou la recherche médicale.",
    date: "2024-09-08",
  },
  {
    nom: "Séminaire professionnel",
    description:
      "Un événement axé sur le développement des compétences et le réseautage dans un domaine professionnel particulier.",
    date: "2024-10-30",
  },
  {
    nom: "Salon du livre",
    description:
      "Un rassemblement d'auteurs, d'éditeurs et de lecteurs pour célébrer la littérature et encourager la lecture.",
    date: "2024-11-25",
  },
  {
    nom: "Tournoi sportif",
    description:
      "Une compétition sportive où des équipes s'affrontent dans différents sports pour remporter des prix.",
    date: "2024-12-12",
  },
  {
    nom: "Gala de charité",
    description:
      "Une soirée de collecte de fonds comprenant des enchères, des performances artistiques et des discours pour soutenir une cause charitable.",
    date: "2024-12-31",
  },
];

function Evenement() {
  const [charge, setCharge] = useState(false);
  setInterval(() => {
    setCharge(true);
  }, 2000);
  return (
    <div className="">
      <div className="row">
        <div className="col-md-3">
          <Nav marcher="#FFCC00" />
        </div>
        <div className="col-md-9 ">
          <Headers marcher="#FFCC00" />

          {!charge && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "35%",
                justifyContent: "center",
                height: "90vh",
              }}
            >
              <Load />
            </div>
          )}
          {charge && (
            <>
              <motion.div
                className="d-flex flex-column"
                style={{ marginTop: "100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="container-fluid">
                  {/* <motion.div
                    id="radius-shape-1"
                    className="position-absolute rounded-circle shadow-5-strong"
                    style={{
                      left: "25%",
                      top: "20%",
                      width: "300px",
                      height: "300px",
                      backgroundColor: "#153330",
                    }}
                    animate={{ scale: 1.3 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <motion.div
                    id="radius-shape-2"
                    className="position-absolute shadow-5-strong"
                    style={{ bottom: "-10%", right: "10%" }}
                    animate={{ rotate: "180deg" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                      restDelta: 0,
                    }}
                  ></motion.div> */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "3em",
                      zIndex: 3,
                    }}
                    className="row"
                  >
                    <hr />

                    {evenements.map((evenement) => (
                      <Post evenements={evenement} key={evenement.nom} />
                    ))}
                  </div>
                  <hr />
                  <Weather />

                  <Events />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Evenement;
