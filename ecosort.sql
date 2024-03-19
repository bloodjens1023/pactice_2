-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 19 mars 2024 à 14:35
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecosort`
--

-- --------------------------------------------------------

--
-- Structure de la table `carte`
--

CREATE TABLE `carte` (
  `id_carte` int(11) NOT NULL,
  `numero_carte` varchar(9) NOT NULL,
  `validite` varchar(255) NOT NULL,
  `user_proprietaire` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `carte`
--

INSERT INTO `carte` (`id_carte`, `numero_carte`, `validite`, `user_proprietaire`) VALUES
(3, '123123123', '11/24', 'AZ@gmail.com'),
(4, '12312312', '11/24', 'nh@gmail.com'),
(5, '123123123', '11/24', '1ah@gmail.com'),
(6, '123123123', '11/24', '2ah@gmail.com'),
(7, '123123123', '11/24', 'hasiniainafanomezantsoa3@gmail.com'),
(8, '123123123', '11/24', 'hasiniainafanomezantsoa2@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id_panier` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `description_panier` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `panier`
--

INSERT INTO `panier` (`id_panier`, `id_produit`, `description_panier`) VALUES
(16, 2, 'Produit Venyl'),
(17, 1, 'Jus Naturel à l\'ananas en Bouteilles en verre'),
(18, 1, 'Jus Naturel à l\'ananas en Bouteilles en verre'),
(19, 2, 'Produit Venyl');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id_produit` int(11) NOT NULL,
  `nom_produit` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `prix` int(11) NOT NULL,
  `lien_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id_produit`, `nom_produit`, `description`, `prix`, `lien_image`) VALUES
(1, 'Jus Naturel à l\'ananas en Bouteilles en verre', 'jus naturel ', 10000, '/src/assets/img/jus.jpg'),
(2, 'Produit Venyl', 'jus naturel ', 10000, '/src/assets/img/venyl.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nom_user` varchar(100) NOT NULL,
  `prenom_user` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp_user` varchar(255) NOT NULL,
  `token` int(11) NOT NULL DEFAULT 1000
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom_user`, `prenom_user`, `email`, `mdp_user`, `token`) VALUES
(57, 'Jenny', 'RAKOTO', 'hasiniainafanomezantsoa32@gmail.com', 'JENNY123#', 1000),
(60, 'Désiré', 'fenitra', 'AZ@gmail.com', '123', 1000),
(61, 'Désiré', 'fenitra', 'nh@gmail.com', '123', 1000),
(63, 'Désiré', 'fenitra', 'ah@gmail.com', '123', 1000),
(65, 'Désiré', 'fenitra', '1ah@gmail.com', '123', 1000),
(67, 'Désiré', 'fenitra', '2ah@gmail.com', '123', 1000),
(68, 'Désiré', 'fenitra', 'hasiniainafanomezantsoa3@gmail.com', 'cdsddfs', 1000),
(69, 'Désiré', 'fenitra', 'hasiniainafanomezantsoa2@gmail.com', '123', 1000);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `carte`
--
ALTER TABLE `carte`
  ADD PRIMARY KEY (`id_carte`),
  ADD KEY `fk_user` (`user_proprietaire`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id_panier`),
  ADD KEY `fk_produit` (`id_produit`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id_produit`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `carte`
--
ALTER TABLE `carte`
  MODIFY `id_carte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `carte`
--
ALTER TABLE `carte`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_proprietaire`) REFERENCES `user` (`email`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `fk_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id_produit`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
