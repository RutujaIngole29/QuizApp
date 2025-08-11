-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: quiz
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKt8o6pivur7nn124jehx7cygw5` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (3,'General Knowledge'),(6,'History'),(1,'Java'),(4,'Maths'),(5,'Science'),(2,'SQL');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_question`
--

DROP TABLE IF EXISTS `quiz_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_question` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `correct_answer` varchar(255) DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `question_text` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_question`
--

LOCK TABLES `quiz_question` WRITE;
/*!40000 ALTER TABLE `quiz_question` DISABLE KEYS */;
INSERT INTO `quiz_question` VALUES (26,'Mahatma Gandhi','Jawaharlal Nehru','Mahatma Gandhi','Sardar Patel','Subhas Chandra Bose',' Who is known as the Father of the Nation in India?','General Knowledge','Easy'),(27,'Mango','Apple','Mango','Banana','Orange','What is the national fruit of India?','General Knowledge','Easy'),(29,'Rajendra Prasad','Rajendra Prasad','Zakir Husain','V. V. Giri','S. Radhakrishnan',' Who was the first President of India?','General Knowledge','Medium'),(30,'Kosi','Yamuna','Kosi','Ganga','Brahmaputra','Which river is known as the ‘Sorrow of Bihar’?','General Knowledge','Medium'),(31,'APJ Abdul Kalam','C. Rajagopalachari','APJ Abdul Kalam','Rabindranath Tagore','Vikram Sarabhai','Who wrote the book “Wings of Fire”?','General Knowledge','Medium'),(32,'Marie Curie','Marie Curie','Mother Teresa','Florence Nightingale','Jane Austen','Who was the first woman to win a Nobel Prize?','General Knowledge','Hard'),(33,'1949','1947','1950','1949','1951','In which year was the Indian Constitution adopted?','General Knowledge','Hard'),(37,'Babur','Akbar','Babur','Humayun','Aurangzeb','Who was the first Mughal Emperor of India?','History','Medium'),(38,'Lal Bahadur Shastri','Indira Gandhi','Lal Bahadur Shastri','Jawaharlal Nehru','Sardar Patel','Which Indian leader gave the slogan “Jai Jawan, Jai Kisan”?','History','Medium'),(39,'1990','1956','1990','1975','1989','In which year was Dr. B. R. Ambedkar awarded the Bharat Ratna?','History','Medium'),(40,'Indo-Pak War 1971','Indo-China War','Indo-Pak War 1965','Indo-Pak War 1971','Kargil War','During which war was Indira Gandhi the Prime Minister of India that led to the creation of Bangladesh?','History','Hard'),(41,'Teacher','Doctor','Teacher','Judge','Freedom fighter','Savitribai Phule is known as India’s first woman:','History','Hard'),(42,'class','class','Class','new','define','Which keyword is used to create a class in Java?','Java','Easy'),(43,'0','0','null','undefined','1','What is the default value of an int variable in Java?','Java','Easy'),(44,'String','int','boolean','String','double','Which of these is not a Java primitive data type?','Java','Easy'),(45,'Method overriding','Method overloading','Method overriding','Inheritance','Encapsulation','Which concept in Java is used to achieve runtime polymorphism?','Java','Medium'),(46,'java.lang','java.util','java.lang','java.io','java.net','Which package is automatically imported into every Java program?','Java','Medium'),(47,'Multiple inheritance through classes','Multiple inheritance through classes','Method overloading','Interfaces','Garbage collection','Which of these features is not supported by Java?','Java','Medium'),(48,'G1 Garbage Collector','G1 Garbage Collector','CMS Garbage Collector','Serial Garbage Collector','Parallel Garbage Collector','Which garbage collection algorithm is used by default in modern Java versions (Java 9+)?','Java','Hard'),(49,'Method Area','Heap','Stack','Method Area','Native Method Stack','Which Java memory area stores metadata about classes and methods?','Java','Hard'),(50,'final','static','final','abstract','private','In Java, which keyword is used to prevent a class from being subclassed?','Java','Hard'),(51,'13','12','13','14','15','What is 8 + 5?','Maths','Easy'),(52,'7','6','7','8','9','What is the square root of 49?','Maths','Easy'),(53,'5','4','5','6','8','What is 20 ÷ 4?','Maths','Easy'),(54,'30','20','25','30','35','What is 15% of 200?','Maths','Medium'),(55,'30','20','25','30','35','What is 15% of 200?','Maths','Medium'),(56,'30','20','25','30','35','What is 15% of 200?','Maths','Medium'),(57,'9 cm','6 cm','8 cm','9 cm','12 cm','The perimeter of a square is 36 cm. What is the length of one side?','Maths','Medium'),(58,'92','92','94','88','90',' Solve: 12 × 8 – 20 ÷ 4','Maths','Medium'),(59,'6','4','5','6','7','If 3x – 7 = 11, what is x?','Maths','Hard'),(60,'60 km/h','50 km/h','55 km/h','60 km/h','65 km/h','A train travels 120 km in 2 hours. What is its average speed?','Maths','Hard'),(61,'7 cm','6 cm','7 cm','8 cm','9 cm','The area of a circle is 154 cm². What is its radius? (Take π = 3.14)','Maths','Hard'),(62,'H₂O','CO₂','H₂O','O₂','HO₂','What is the chemical symbol for water?','Science','Easy'),(63,'8','7','8','9','10','How many planets are there in the Solar System?','Science','Easy'),(64,'Carbon dioxide','Oxygen','Carbon dioxide','Nitrogen','Hydrogen','Which gas do plants absorb during photosynthesis?','Science','Easy'),(65,'Cerebellum','Cerebrum','Cerebellum','Brainstem','Spinal cord','Which part of the human body controls balance?','Science','Medium'),(66,'Hydroelectric energy','Nuclear energy','Geothermal energy','Hydroelectric energy','Solar energy','What type of energy is produced by moving water?','Science','Medium'),(67,'Vitamin D','Vitamin A','Vitamin B12','Vitamin C','Vitamin D','Which vitamin is produced when human skin is exposed to sunlight?','Science','Medium'),(68,'Mitochondria','Ribosome','Nucleus','Mitochondria','Golgi apparatus','What is the powerhouse of the cell?','Science','Hard'),(69,'Jupiter','Earth','Jupiter','Saturn','Neptune','Which planet has the fastest rotation speed in our Solar System?','Science','Hard'),(70,'Isaac Newton','Albert Einstein','Galileo Galilei','Isaac Newton','Nikola Tesla','Who proposed the three laws of motion?','Science','Hard'),(71,'SELECT','GET','SELECT','FETCH','SHOW','Which SQL statement is used to retrieve data from a database?','SQL','Easy'),(72,'TRUNCATE','DELETE','REMOVE','TRUNCATE','DROP','Which keyword is used to remove all records from a table but keep the structure?','SQL','Easy'),(73,'Structured Query Language','Structured Query Language','Simple Question List','Structured Quick Language','Sequential Query Logic','What does SQL stand for?','SQL','Easy'),(74,'WHERE','FILTER','WHERE','HAVING','ORDER BY','Which clause is used to filter records in SQL?','SQL','Medium'),(75,'COUNT()','COUNT()','SUM()','TOTAL()','ROWS()','Which SQL function is used to count the number of rows?','SQL','Medium'),(76,'CREATE TABLE table_name (...);','CREATE TABLE table_name (...);','NEW TABLE table_name (...);','MAKE TABLE table_name (...);','TABLE CREATE table_name (...);','What is the correct syntax to create a table?','SQL','Medium'),(77,'JOIN','UNION','JOIN','COMBINE','MERGE','Which SQL keyword is used to combine rows from two or more tables based on a related column?','SQL','Hard'),(78,'INNER JOIN','INNER JOIN','LEFT JOIN','RIGHT JOIN','FULL JOIN','Which JOIN returns only matching rows from both tables?','SQL','Hard'),(79,'ALTER TABLE','UPDATE','MODIFY TABLE','ALTER TABLE','CHANGE TABLE','In SQL, which command is used to change the structure of an existing table?','SQL','Hard'),(81,'Rajendra Prasad','Rajendra Prasad','Jawaharlal Nehru','S. Radhakrishnan','Zakir Husain',' Who was the first President of India?','History','Easy'),(82,'Shah Jahan','Akbar','Shah Jahan','Aurangzeb','Humayun','The Taj Mahal was built by which Mughal Emperor?','History','Easy'),(83,' Sardar Vallabhbhai Patel','Bhagat Singh','Subhas Chandra Bose','Sardar Vallabhbhai Patel','Bal Gangadhar Tilak','Who was known as the “Iron Man of India”?','History','Easy'),(84,'3','2','3','4','5','How many colors are there in the Indian national flag?','General Knowledge','Easy');
/*!40000 ALTER TABLE `quiz_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'rutuja','Rutuja Ingole'),(2,'12345','testuser'),(3,'dore','doraemon'),(4,'sohelshaikh','shaikh sohel'),(5,'cindrella','cindrella'),(6,'user','user123'),(7,'1234','seema');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-11 15:27:29
