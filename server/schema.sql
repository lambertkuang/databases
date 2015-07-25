CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username varchar(160),
  message varchar(160),
  roomname varchar(160),
  objectId INT NOT NULL AUTO_INCREMENT,
  primary key (objectId)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  userid int(6),
  username varchar(30)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

