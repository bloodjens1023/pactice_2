const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const port = 8000;
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecosort",
});

app.get("/api/listeProduit", (req, res) => {
  const sql = "SELECT * FROM produits";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json(result);
  });
});

app.post("/api/listeUsr", (req, res) => {
  const sql =
    "SELECT * FROM user as u inner join carte as c where u.email=c.user_proprietaire and u.email = ? limit 1";
  const values = [req.body.email];
  console.log(sql);
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json(result);
  });
});

app.get("/api/listePanier", (req, res) => {
  const sql =
    "SELECT *,COUNT(p.id_produit) as nb FROM `panier` as ap INNER JOIN produits as p WHERE ap.id_produit = p.id_produit GROUP BY (p.nom_produit)";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json(result);
  });
});
app.get("/api/supprimerPanier", (req, res) => {
  const sql = "delete from panier";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json(result);
  });
});

app.post("/api/ajoutPanier", (req, res) => {
  console.log(req.e);
  const sql =
    "INSERT INTO `panier`(`id_produit`, `description_panier`) VALUES (?,?)";
  const values = [req.body.e, req.body.f];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json("insertion panier avec success");
  });
});

app.post("/api/inscription", (req, res) => {
  console.log(req.body);
  const sql =
    "INSERT INTO user (nom_user, prenom_user, email, mdp_user) VALUES (?, ?, ?, ?)";
  const values = [req.body.nom, req.body.prenom, req.body.email, req.body.pass];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    creationCarte(req.body.email, res);
  });
});

function creationCarte(email, res) {
  const sql =
    "INSERT INTO carte (numero_carte, validite, user_proprietaire) values (?,?,?);";
  const values = ["123123123", "11/24", email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json("Connecté");
  });
}

app.post("/api/VendreDechet", (req, res) => {
  console.log(req.body);
  const sql =
    "INSERT INTO vente (type_dechets, quantite, numero_carte, proprio_carte, mois_exp, annee_exp, localisation) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.type,
    req.body.quantite,
    req.body.numero_carte,
    req.body.proprio_carte,
    req.body.mois_exp,
    req.body.annee_exp,
    req.body.loc,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json("Vente ajoutee avec success");
  });
});

app.get("/api/listeDechets", (req, res) => {
  const sql = "SELECT * FROM vente";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err); // Affichez l'erreur dans la console
      return res.status(500).json("Erreur de connexion"); // Retournez une réponse avec un code d'erreur 500
    }
    return res.json(result);
  });
});

app.get("/liste", async (req, res) => {
  const stripe = require("stripe")(
    "sk_test_51OsAfMFDP4bEYovMniHoOWGuRFuCN7n1HBfM34weVj7bOotIRrcod9KuLS7hMppHcZ3wNhAzH52ShbAYhi7cg24K00PwCnOncm"
  );
  try {
    const events = await stripe.events.list({
      limit: 10,
    });

    const userEmails = events.data.map((event) => {
      // Vérifier si l'événement contient des informations sur le client et que l'email est disponible
      if (event.data && event.data.object && event.data.object.email) {
        return event.data.object.name;
      } else {
        return "Email non disponible";
      }
    });

    // Envoyer le tableau JSON en réponse à la requête HTTP
    res.json(userEmails);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des événements Stripe." });
  }
});
app.get("/", async (req, res) => {
  const Stripe = require("stripe");
  const stripe = Stripe(
    "sk_test_51OsAfMFDP4bEYovMniHoOWGuRFuCN7n1HBfM34weVj7bOotIRrcod9KuLS7hMppHcZ3wNhAzH52ShbAYhi7cg24K00PwCnOncm"
  );

  // Créer un objet représentant les détails du client
  const customerDetails = {
    email: "customer@example.com",
    name: "Customer Name",
    phone: "123456789",
    address: {
      line1: "123 Main Street",
      city: "City",
      state: "State",
      postal_code: "12345",
      country: "US",
    },
    metadata: {
      key1: "value1",
      key2: "value2",
    },
    payment_method: "pm_card_visa", // Remplacer par l'ID de la méthode de paiement souhaitée
    invoice_settings: {
      custom_fields: [
        {
          name: "Field Name",
          value: "Field Value",
        },
      ],
      default_payment_method: "pm_card_visa", // Remplacer par l'ID de la méthode de paiement par défaut
    },
    preferred_locales: ["en"],
    tax_exempt: "none",
    balance: 10000, // 100.00 en cents
    shipping: {
      name: "Shipping Name",
      address: {
        line1: "123 Shipping Street",
        city: "Shipping City",
        state: "Shipping State",
        postal_code: "54321",
        country: "US",
      },
    },
  };

  try {
    // Créer le client sur Stripe
    const customer = await stripe.customers.create(customerDetails);
    console.log(customer);
    res.send("Customer created successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating customer.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
