import React, { useState } from 'react';
import img from '../assets/img/chip.png'
import logo from '../assets/img/logo.png'
import { motion } from 'framer-motion';
import ValidPaiement from './ValidPaiement';
import { useNavigate } from 'react-router-dom';
import GoogleMap from './GoogleMap';

const Paiement = (props) => {
  const [numC, setNumC] = useState(' ')
  const [nomC, setNomC] = useState(' ')
  const [mois, setMois] = useState(' ')
  const [anne, setAnnee] = useState(' ')
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();  

  console.log(props)
  function handleChange(e) {
    e.preventDefault()
    
    if (numC !== '') {
        setVisible(true);
        const intervalId = setInterval(() => {
            
            clearInterval(intervalId); // Arrête l'intervalle après 1000 millisecondes
            navigate('/profil'); // Navigue vers '/profil' après 1000 millisecondes
        }, 2000);
    }
}



  return (
    <>
   
    {visible && (
        <ValidPaiement/>
     )}

{!visible && (
     <>
     <motion.div className="containerss" style={{ padding: "20px", width: "97vw", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
              >

                  <motion.div className="card-container"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                  >


                      <div className="front">
                          <div className="image">
                              <motion.img src={img} alt="" />
                              <motion.img src={logo} alt="" style={{ width: "60px", height: "60px", filter: "drop-shadow(0px 0px 5px orange)" }}
                                  animate={{ scale: 1.2 }}
                                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", }} />
                          </div>
                          <div className="card-number-box">{numC}</div>
                          <div className="flexbox">
                              <div className="box">
                                  <span>Propriétaire du carte</span>
                                  <div className="card-holder-name">{nomC}</div>
                              </div>
                              <div className="box">
                                  <span>expires</span>
                                  <div className="expiration">
                                      <span className="exp-month">{mois}</span>
                                      <span className="exp-year">/{anne}</span>
                                  </div>
                              </div>
                          </div>
                      </div>



                  </motion.div>




                  <form onSubmit={handleChange} style={{ paddingTop: "180px" }}>
                      <center>
                          <h3>INFORMATION POUR LA LIVRAISON</h3>
                      </center>
                      <div className="inputBox">
                          <span>Prix total de la commande</span>
                          <h3> Ar</h3>
                      </div>
                      <div className="inputBox">
                          <span>Numero de la carte</span>
                          <input type="text" maxLength="16" className="card-number-input" onChange={e => setNumC(e.target.value)} required />
                      </div>
                      <div className="inputBox">
                          <span>Propriétaire du carte</span>
                          <input type="text" className="card-holder-input" onChange={e => setNomC(e.target.value)} required />
                      </div>
                      <div className="flexbox">
                          <div className="inputBox">
                              <span>expiration mois</span>
                              <select name="" id="" className="month-input" onChange={e => setMois(e.target.value)}>
                                  <option value="month" defaultChecked disabled>Mois</option>
                                  <option value="01">01</option>
                                  <option value="02">02</option>
                                  <option value="03">03</option>
                                  <option value="04">04</option>
                                  <option value="05">05</option>
                                  <option value="06">06</option>
                                  <option value="07">07</option>
                                  <option value="08">08</option>
                                  <option value="09">09</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                              </select>
                          </div>
                          <div className="inputBox">
                              <span>expiration année</span>
                              <select name="" id="" className="year-input" onChange={e => setAnnee(e.target.value)}>
                                  <option value="year" defaultChecked disabled>Ans</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>
                                  <option value="2028">2028</option>
                                  <option value="2029">2029</option>
                                  <option value="2030">2030</option>
                              </select>
                          </div>

                      </div>
                      <br />
                      <br />
                      <div>
                          <h4>Votre Coordonées</h4>
                      </div>
                      <br />
                      <div>

                          <GoogleMap />
                      </div>
                      <br />
                      <button className='bt'>
                          <div className="svg-wrapper-1">
                              <div className="svg-wrapper">

                                  <svg className="bi bi-cart-check-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                                  </svg>
                              </div>
                          </div>
                          <span>Valider l'achat</span>
                      </button>

                  </form>

              </motion.div></> )}

</>   

  );
};

export default Paiement;
