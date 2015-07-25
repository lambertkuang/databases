CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  userid int(6),
  message varchar(160),
  roomid int(6)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  userid int(6),
  username varchar(30)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  roomid int(6),
  roomname varchar(30)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

