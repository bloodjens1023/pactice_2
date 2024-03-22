export default function Post(evenements) {
  return (
    <main>
      <div className="entry row center">
        <div className="left">
          <img src="../image.jpg" />
          <h2>{evenements.nom}</h2>
          <p>{evenements.description}</p>
        </div>
        <div className="right">
          <h3>{evenements.date}</h3>
          <button className="bouton-post">Faire un don</button>
        </div>
      </div>
    </main>
  );
}
