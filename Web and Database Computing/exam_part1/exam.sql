-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	8.0.19-0ubuntu5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `test`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `test`;

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `Books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Books` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `Author` varchar(200) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `Hard_cover` tinyint DEFAULT NULL,
  `Soft_cover` tinyint DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
INSERT INTO `Books` VALUES (1,'How to play PS5','Jimmy Jones',22.22,1,0,'Game.jpg'),(2,'How to play PS5','Jimmy Jones',22.22,0,1,'Game.jpg'),(3,'Rome','Prof. Mark',55.99,1,0,'Rome.jpeg');
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Genre`
--

DROP TABLE IF EXISTS `Genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Genre` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Book` int DEFAULT NULL,
  `Gaming` tinyint DEFAULT NULL,
  `Romance` tinyint DEFAULT NULL,
  `History` tinyint DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Book` (`Book`),
  CONSTRAINT `Genre_ibfk_1` FOREIGN KEY (`Book`) REFERENCES `Books` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genre`
--

LOCK TABLES `Genre` WRITE;
/*!40000 ALTER TABLE `Genre` DISABLE KEYS */;
INSERT INTO `Genre` VALUES (1,1,1,0,0),(2,2,1,0,0),(3,3,0,1,1);
/*!40000 ALTER TABLE `Genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Order_History`
--

DROP TABLE IF EXISTS `Order_History`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Order_History` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `User` int DEFAULT NULL,
  `Purchase_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `User` (`User`),
  CONSTRAINT `Order_History_ibfk_1` FOREIGN KEY (`User`) REFERENCES `Users` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order_History`
--

LOCK TABLES `Order_History` WRITE;
/*!40000 ALTER TABLE `Order_History` DISABLE KEYS */;
INSERT INTO `Order_History` VALUES (1,1,'2021-06-30 14:05:07'),(3,1,'2021-05-31 14:07:31'),(4,2,'2021-06-11 14:24:04');
/*!40000 ALTER TABLE `Order_History` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ordered_book`
--

DROP TABLE IF EXISTS `Ordered_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ordered_book` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ordered_id` int DEFAULT NULL,
  `Book` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Book` (`Book`),
  KEY `Ordered_id` (`Ordered_id`),
  CONSTRAINT `Ordered_book_ibfk_1` FOREIGN KEY (`Book`) REFERENCES `Books` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Ordered_book_ibfk_2` FOREIGN KEY (`Ordered_id`) REFERENCES `Order_History` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ordered_book`
--

LOCK TABLES `Ordered_book` WRITE;
/*!40000 ALTER TABLE `Ordered_book` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ordered_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `Email_address` varchar(200) DEFAULT NULL,
  `Password` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Jelly Jones','abc@gmail.com','435701f3df9505c95c7e9831f2ddf32ca719062294b7e465f7967c31d8bc8795'),(2,'Lily Lame','def@gmail.com','3235d56285255bc14cf1739222456d89d0a612941d6f01148a6e4c198a525911');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-30 15:35:04
