
import SideBar from "./SideBar";
import React from "react";
import '../assets/css/produit.css'
import axios from "axios";
import { useState, useEffect } from "react";
import CardProduit from "./CardProduit";
import  Nav from "./Nav";
import Headers from "./Headers";
import Prof from "./Prof";


export default function Produits() {
  const [produits, setProduits] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/listeProduit')
          .then(res => {
            setProduits(res.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données : ', error);
          });
      }, []);
  return (
    <>
    <div className="row">
      <div className="col-3">
        <Nav/>
      </div>
      
      <div className="col-9">
      <Prof/>
        <div className="row">
          <div className="col-12">
          <div style={{position:"relative"}}>
              
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div style={{display:"flex", gap:"10px", margin:"30px"}} className="row" >
                  {produits.map(produit => (
                            <CardProduit produits={produit} key={produit.id_produit}/>
                            
                            ))}
                  {produits.map(produit => (
                            <CardProduit produits={produit} key={produit.id_produit}/>
                            
                            ))}
                            {produits.map(produit => (
                            <CardProduit produits={produit} key={produit.id_produit}/>
                            
                            ))}
                    </div>
                </div>
              </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-11">
            <SideBar/>
          </div>
        </div>



      </div>
    </div>
    
      
      
    </>
  );
}
