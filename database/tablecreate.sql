CREATE DATABASE `tutorial_app`;

CREATE TABLE `user` (
	`userid` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(300) NOT NULL,
	`email` varchar(300) NOT NULL,
	`password` varchar(300) NOT NULL,
	`joindate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`userid`)
);

CREATE TABLE `course` (
	`courseid` INT NOT NULL AUTO_INCREMENT,
	`coursename` varchar(300) NOT NULL,
	`publisher` int,
	`imgurl` VARCHAR(1000),
	`coursedescription` varchar(1000),
	`nooftopics` INT(20) NOT NULL DEFAULT '0',
	`createdate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`public` boolean,
	PRIMARY KEY (`courseid`)
);

CREATE TABLE `topics` (
	`topicid` INT NOT NULL AUTO_INCREMENT,
	`topicname` varchar(500) NOT NULL,
	`topicdescription` varchar(1000),
	`lessionid` INT NOT NULL,
	`nooflearn` INT NOT NULL,
	`noofpractice` INT NOT NULL,
	PRIMARY KEY (`topicid`)
);

CREATE TABLE `lessons` (
	`lessionid` INT NOT NULL AUTO_INCREMENT,
	`courseid` INT NOT NULL,
	`lessionname` varchar(100) NOT NULL,
	PRIMARY KEY (`lessionid`)
);

CREATE TABLE `learn` (
	`learnid` INT NOT NULL AUTO_INCREMENT,
	`topicid` INT NOT NULL,
	`link` varchar(1000) NOT NULL,
	`type` varchar(200),
	PRIMARY KEY (`learnid`)
);

CREATE TABLE `practice` (
	`practiceid` INT NOT NULL AUTO_INCREMENT,
	`topicid` INT NOT NULL,
	`link` varchar(255) NOT NULL,
	`source` varchar(220),
	PRIMARY KEY (`practiceid`)
);

CREATE TABLE `user_courses` (
	`ucid` INT NOT NULL AUTO_INCREMENT,
	`userid` INT NOT NULL,
	`courseid` INT NOT NULL,
	`publisher` INT,
	PRIMARY KEY (`ucid`)
);

ALTER TABLE `topics` ADD CONSTRAINT `topics_fk0` FOREIGN KEY (`lessionid`) REFERENCES `lessons`(`lessionid`)  ON DELETE CASCADE;

ALTER TABLE `lessons` ADD CONSTRAINT `lessons_fk0` FOREIGN KEY (`courseid`) REFERENCES `course`(`courseid`)  ON DELETE CASCADE;

ALTER TABLE `learn` ADD CONSTRAINT `learn_fk0` FOREIGN KEY (`topicid`) REFERENCES `topics`(`topicid`)  ON DELETE CASCADE;

ALTER TABLE `practice` ADD CONSTRAINT `practice_fk0` FOREIGN KEY (`topicid`) REFERENCES `topics`(`topicid`)  ON DELETE CASCADE;

ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_fk0` FOREIGN KEY (`userid`) REFERENCES `user`(`userid`)  ON DELETE CASCADE;

ALTER TABLE `course` ADD CONSTRAINT `user_course_fk0` FOREIGN KEY (`publisher`) REFERENCES `user`(`userid`)  ON DELETE CASCADE;

ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_fk1` FOREIGN KEY (`courseid`) REFERENCES `course`(`courseid`)  ON DELETE CASCADE;

