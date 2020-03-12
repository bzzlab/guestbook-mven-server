create schema if not exists guestbookdb collate utf8mb4_0900_ai_ci;

create table if not exists benutzer
(
	id mediumint unsigned auto_increment
		primary key,
	vorname varchar(255) null,
	nachname varchar(255) null,
	adresse1 varchar(255) null,
	adresse2 varchar(255) null,
	postleitzahl varchar(20) null,
	stadt varchar(255) null,
	land varchar(100) null,
	telefon varchar(100) null,
	mobile varchar(100) null,
	email varchar(255) null,
	datum varchar(255) null
);

create table if not exists eintrag
(
	id int auto_increment
		primary key,
	titel varchar(50) null,
	text varchar(1000) null,
	autor varchar(100) null,
	email varchar(100) null,
	datum date null
);
