-- MariaDB dump 10.19-11.3.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: ecosort
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carte`
--

DROP TABLE IF EXISTS `carte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carte` (
  `id_carte` int(11) NOT NULL AUTO_INCREMENT,
  `numero_carte` varchar(9) NOT NULL,
  `validite` varchar(255) NOT NULL,
  `user_proprietaire` varchar(255) NOT NULL,
  PRIMARY KEY (`id_carte`),
  KEY `fk_user` (`user_proprietaire`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_proprietaire`) REFERENCES `user` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carte`
--

LOCK TABLES `carte` WRITE;
/*!40000 ALTER TABLE `carte` DISABLE KEYS */;
INSERT INTO `carte` VALUES
(3,'123123123','11/24','AZ@gmail.com'),
(4,'12312312','11/24','nh@gmail.com'),
(5,'123123123','11/24','1ah@gmail.com'),
(6,'123123123','11/24','2ah@gmail.com'),
(7,'123123123','11/24','hasiniainafanomezantsoa3@gmail.com'),
(8,'123123123','11/24','hasiniainafanomezantsoa2@gmail.com');
/*!40000 ALTER TABLE `carte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `panier` (
  `id_panier` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `description_panier` varchar(255) NOT NULL,
  PRIMARY KEY (`id_panier`),
  KEY `fk_produit` (`id_produit`),
  CONSTRAINT `fk_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id_produit`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produits`
--

DROP TABLE IF EXISTS `produits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produits` (
  `id_produit` int(11) NOT NULL AUTO_INCREMENT,
  `nom_produit` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  `value` varchar(5) NOT NULL,
  `prix` int(11) NOT NULL,
  `lien_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produits`
--

LOCK TABLES `produits` WRITE;
/*!40000 ALTER TABLE `produits` DISABLE KEYS */;
INSERT INTO `produits` VALUES
(1,'Camera infrarouge 4 megapixels - Dalhua','camera interieur','4',10000,'/src/assets/img/produits/dalhua/dalhua_infrarouge_4mgp.jpg'),
(3,'Camera infrarouge 2 megapixels - Dalhua','camera exterieur','4,5',10000,'/src/assets/img/produits/dalhua/dalhua_infrarouge.jpg'),
(4,'Mini dome - Dalhua','camera interieur','3',10000,'/src/assets/img/produits/dalhua/dalhua_mini_dome.jpg');
/*!40000 ALTER TABLE `produits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nom_user` varchar(100) NOT NULL,
  `prenom_user` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp_user` varchar(255) NOT NULL,
  `token` int(11) NOT NULL DEFAULT 1000,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(57,'Jenny','RAKOTO','hasiniainafanomezantsoa32@gmail.com','JENNY123#',1000),
(60,'Désiré','fenitra','AZ@gmail.com','123',1000),
(61,'Désiré','fenitra','nh@gmail.com','123',1000),
(63,'Désiré','fenitra','ah@gmail.com','123',1000),
(65,'Désiré','fenitra','1ah@gmail.com','123',1000),
(67,'Désiré','fenitra','2ah@gmail.com','123',1000),
(68,'Désiré','fenitra','hasiniainafanomezantsoa3@gmail.com','cdsddfs',1000),
(69,'Désiré','fenitra','hasiniainafanomezantsoa2@gmail.com','123',1000);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vente`
--

DROP TABLE IF EXISTS `vente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vente` (
  `id_vente` int(11) NOT NULL AUTO_INCREMENT,
  `type_dechets` varchar(250) NOT NULL,
  `quantite` int(100) NOT NULL,
  `numero_carte` int(16) NOT NULL,
  `proprio_carte` varchar(100) NOT NULL,
  `mois_exp` varchar(100) NOT NULL,
  `annee_exp` int(4) NOT NULL,
  `localisation` varchar(100) NOT NULL,
  PRIMARY KEY (`id_vente`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vente`
--

LOCK TABLES `vente` WRITE;
/*!40000 ALTER TABLE `vente` DISABLE KEYS */;
INSERT INTO `vente` VALUES
(38,'Déchets plastiques',10,123456789,'Satoru','Mars',2027,'Shibuya'),
(40,'Déchets métalliques',15,333333333,'Fenitra','Avril',2025,'Andavamamba'),
(41,'Déchets métalliques',6,123849237,'Gojo','Avril',2026,'Kyoto'),
(42,'Déchets fibreux',100,666666666,'Boywithuke','Decembre',2026,'united state');
/*!40000 ALTER TABLE `vente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-23 11:36:16
