-- ************************************** `Kazu`.`Guild`

CREATE TABLE `Guild`
(
 `ID`           varchar(24) NOT NULL ,
 `antibot`      int DEFAULT '-1' ,
 `antispam`     int DEFAULT '-1' ,
 `antitoken`    int DEFAULT '-1' ,
 `antichannels` int DEFAULT '-1' ,
 `antiroles`    int DEFAULT '-1' ,
 `antiraid`     int DEFAULT '-1' ,

PRIMARY KEY (`ID`)
);

-- ************************************** `Kazu`.`User`

CREATE TABLE `Kazu`.`User`
(
 `ID`        varchar(24) NOT NULL ,
 `Nickname`  varchar(64) NOT NULL ,
 `Level`     int DEFAULT '1' ,
 `Exp`       int DEFAULT '0' ,
 `MaxExp`    int DEFAULT '20' ,
 `blacklist` int NOT NULL ,

PRIMARY KEY (`ID`)
);

-- ************************************** `Kazu`.`warn`

CREATE TABLE `Kazu`.`warn`
(
 `ID`        int NOT NULL AUTO_INCREMENT ,
 `UID`       varchar(24) NOT NULL ,
 `Guild`     varchar(24) NOT NULL ,
 `Reason`    varchar(45) NOT NULL ,
 `Moderator` varchar(24) NOT NULL ,

PRIMARY KEY (`ID`),
KEY `FK_2` (`Guild`),
CONSTRAINT `FK_1` FOREIGN KEY `FK_2` (`Guild`) REFERENCES `Kazu`.`Guild` (`ID`),
KEY `FK_3` (`UID`),
CONSTRAINT `FK_2` FOREIGN KEY `FK_3` (`UID`) REFERENCES `Kazu`.`User` (`ID`)
);

