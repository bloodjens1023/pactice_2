import { Link } from "react-router-dom";
import Headers from "./Headers";
import { motion } from "framer-motion"
function Connexion() {

    return ( 
        <>
            
            <motion.section className="background-radial-gradient overflow-hidden"
                     variants={{
                        hidden:{opacity: 0, y:75},
                        visible:{opacity: 1, y:0}
                     }}
                     initial = "hidden"
                     animate="visible"
                     transition={{duration: 0.5, delay: 0.25}}
            >
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex:10}} >
                    <h1 className="my-5 display-5 fw-bold ls-tight" style={{color:"hsl(218, 81%, 95%)"}}>
                    Eye I <br />
                    <span style={{color:"#04323A"}}>Ameliorer votre securite</span>
                    </h1>
                    <p className="mb-4 opacity-70" style={{color:"#000000"}}>
                    Afin d'améliorer votre entourage et de la securite votre priorité, il est nécesaire de s'inscrire si vous n'êtes pas encore membre
                    </p>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <motion.div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"
                        animate={{ scale:1.3 }}
                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse",}}
                    ></motion.div>
                    <motion.div id="radius-shape-2" className="position-absolute shadow-5-strong"
                        animate={{ rotate:"180deg"}}
                        transition={{ repeat: Infinity, duration: 2, repeatType:"reverse", restDelta: 0}}
                    ></motion.div>

                    <div className="card bg-glass">
                    <div className="card-body px-4 py-5 px-md-5">
                        <form>
                            <h1 className="mb-5">Se connecter</h1>

                       
                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">Adresse email</label>
                        </div>

                   
                        <div className="form-outline mb-4">
                            <input type="password" id="form3Example4" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4">mots de passe</label>
                        </div>


                        
                        <center>
                                <motion.button type="submit" className="btn btn-secondary  mb-4" style={{width:"300px"}}  whileHover={{scale:1.1}}>
                                    Se connecter
                                </motion.button>
                        </center>

                        <div className="text-center">
                            <p> ou se connecter avec :</p>
                            <motion.button type="button" className="btn btn-floating mx-1"
                                whileHover={{scale:1.1}}
                            
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            </motion.button>

                            <motion.button type="button" className="btn btn-floating mx-1" style={{color:"#E50000"}}
                                whileHover={{scale:1.1}}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                            </svg>
                            </motion.button>

                            <motion.button type="button" className="btn  btn-floating mx-1"
                                whileHover={{scale:1.1}}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>
                            </motion.button>
                        </div>
                        <center >
                            <Link to="/Inscription" style={{color:"white"}}><hr /> Je ne suis pas encore membre</Link>
                        </center>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </motion.section>
        </>
     );
}

export default Connexion;