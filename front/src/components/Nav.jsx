import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <div className=" vertical-nav" style={{borderRadius:"0px 0px 40px"}} >
            <ul className="nav flex-column">
                <li style={{textAlign:"center", color:"white", fontFamily:"monospace"}}>
                    <h1>Ecosort</h1>
                </li>
                <hr />



                <li className="nav-item">  
                    <Link className="nav-link" to='/Produits' style={{display: "flex", alignItems: "start", gap:"4px"}}>
                    <svg className="bi bi-shop" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{fontSize:"25px", marginRight:"10px"}}>
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"></path>
                    </svg>
                        <div style={{marginTop:'2px'}}>
                            Marketplace
                        </div>
                    </Link>
                </li>
                <li className="nav-item">  
                    <Link className="nav-link" to='/' style={{display: "flex", alignItems: "start", gap:"4px"}}>
                        <div>
                        <svg className="bi bi-calendar-event" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{fontSize:"25px", marginRight:"10px"}}>
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"></path>
                        </svg>
                        </div>
                        <div style={{marginTop:'2px'}}>
                        Evènements
                        </div>
                    </Link>
                </li>
                <li className="nav-item">  
                    <Link className="nav-link" to='/Paniers' style={{display: "flex", alignItems: "start", gap:"4px"}}>
                        <div>
                        <svg className="bi bi-basket" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{fontSize:"25px", marginRight:"10px"}}>
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"></path>
                        </svg>
                        </div>
                        <div style={{marginTop:'2px'}}>
                        Votre paniers
                        </div>
                    </Link>
                </li>
                <li className="nav-item">  
                    <Link className="nav-link" to='/Paniers' style={{display: "flex", alignItems: "start", gap:"4px"}}>
                        <div>
                        <svg className="bi bi-box-seam-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{fontSize:"25px", marginRight:"10px"}}>
                            <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"></path>
                        </svg>
                        </div>
                        <div style={{marginTop:'2px'}}>
                        Vendre
                        </div>
                    </Link>
                </li>
                <li className="nav-item">  
                    <Link className="nav-link" to='/Profil' style={{display: "flex", alignItems: "start", gap:"4px"}}>
                        <div>
                        <svg className="bi bi-person-vcard-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{fontSize:"25px", marginRight:"10px"}}>
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"></path>
                        </svg>
                        </div>
                        <div style={{marginTop:'2px'}}>
                        Profils
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
     );
}

export default Nav;