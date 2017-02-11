CREATE TABLE `persondb`.`contactinfo` (
  `contactId` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  PRIMARY KEY (`contactId`),
  UNIQUE INDEX `contactId_UNIQUE` (`contactId` ASC));

INSERT INTO `persondb`.`contactinfo` ( `firstname`, `lastname`, `address`, `email`, `phoneNumber`) VALUES ( 'Jonny', 'Khan', '2251 main st irving, TX 25368', 'ok@gmail.com', '4568524587');
INSERT INTO `persondb`.`contactinfo` (`firstname`, `lastname`, `address`, `email`, `phoneNumber`) VALUES ('Abdul', 'Matin', '458 ereaere', 'ere@ok.com', '12457');
INSERT INTO `persondb`.`contactinfo` (`firstname`, `lastname`, `address`, `email`, `phoneNumber`) VALUES ('aaaere', 'srereer', '125 srrrtrt', 'dfdf12@gmail.om', '45852458741');



CREATE TABLE `persondb`.`addtionalperson` (
  `infoid` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `contactId` INT NOT NULL,
  PRIMARY KEY (`infoid`),
  UNIQUE INDEX `infoid_UNIQUE` (`infoid` ASC),
  INDEX `countactId_idx` (`contactId` ASC),
  CONSTRAINT `countactId`
    FOREIGN KEY (`contactId`)
    REFERENCES `persondb`.`contactinfo` (`contactId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `persondb`.`addtionalperson` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'US', '24', '3');
INSERT INTO `persondb`.`addtionalperson` (`gender`, `country`, `age`, `contactId`) VALUES ('Female', 'UK', '32', '4');
INSERT INTO `persondb`.`addtionalperson` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'China', '20', '5');



