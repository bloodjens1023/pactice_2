//card produits
function CardProduit({produits}) {
    return ( 
        <div className="card-container">
            <div className="card" style="width: 18rem;">
                <img src="image1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{produits.nom}</h5>
                    <p className="card-text">{produits.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
     );
}

export default CardProduit;