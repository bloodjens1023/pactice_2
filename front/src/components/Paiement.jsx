import React, { useState } from 'react';
import img from '../assets/img/chip.png'
import logo from '../assets/img/logo.png'
import { motion } from 'framer-motion';
import ValidPaiement from './ValidPaiement';
import { useNavigate } from 'react-router-dom';

const Paiement = () => {
  const [numC, setNumC] = useState(' ')
  const [nomC, setNomC] = useState(' ')
  const [mois, setMois] = useState(' ')
  const [anne, setAnnee] = useState(' ')
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();  

  function handleChange(e) {
    e.preventDefault()
    
    if (numC !== '') {
        setVisible(true);
        const intervalId = setInterval(() => {
            
            clearInterval(intervalId); // Arrête l'intervalle après 1000 millisecondes
            navigate('/profil'); // Navigue vers '/profil' après 1000 millisecondes
        }, 1000);
    }
}



  return (
    <motion.div className="containerss" style={{ padding:"20px",width:"100vw", display:'flex',flexDirection:"column", alignItems:"center", justifyContent:"center"}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.8 }}
    >
        {visible && (
                   <ValidPaiement/>
                )}
    <motion.div className="card-container"
      whileHover={{scale:1.1}}
      transition={{ duration: 0.5 }}
    >
        

        <div className="front">
            <div className="image">
                <motion.img src={img} alt=""/>
                <motion.img src={logo} alt="" style={{width:"60px", height:"60px", filter:"drop-shadow(0px 0px 5px orange)"}}
                  animate={{scale:1.2}}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse",}}
                />
            </div>
            <div className="card-number-box" >{numC}</div>
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
    {!visible && (
                   
                

    <form onSubmit={handleChange}>
        <div className="inputBox">
            <span>card number</span>
            <input type="text" maxLength="16" className="card-number-input" onChange={e => setNumC(e.target.value)}/>
        </div>
        <div className="inputBox">
            <span>Propriétaire du carte</span>
            <input type="text" className="card-holder-input" onChange={e => setNomC(e.target.value)}/>
        </div>
        <div className="flexbox">
            <div className="inputBox">
                <span>expiration mm</span>
                <select name="" id="" className="month-input" onChange={e => setMois(e.target.value)}>
                    <option value="month" defaultChecked disabled>month</option>
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
                <span>expiration yy</span>
                <select name="" id="" className="year-input" onChange={e => setAnnee(e.target.value)}> 
                    <option value="year" defaultChecked disabled>year</option>
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
        <button className='bt' >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
            </div>
          </div>
          <span>Valider l'achat</span>
        </button>

    </form>
    )}

</motion.div>    

  );
};

export default Paiement;
