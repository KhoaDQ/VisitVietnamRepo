--create database VisitVietnamDB
go

--use VisitVietnamDB
GO



-- CREATE TABLE-------#####################################################################
create table Place
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	Slogan nvarchar(500),
	Overview varchar(1000),
	Phone varchar(255),
	Email varchar(255),
	Facebook varchar(255),
	LinkWeb varchar(255),
	EventOfPlace int,
	PicFileName varchar(255)
);

create table Location
(
	Id int identity(1,1) primary key,
	Details varchar(255),
	Street varchar(255),
	Ward varchar(255),
	District varchar(255),
	City varchar(255),
	PlaceId INT
    
    foreign key (PlaceId) references Place(Id)
);

create table Clothes
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	Gender varchar(255),
	RangeAge varchar(255),
	Price varchar(255),
	Note varchar(255),
	PicFileName varchar(255),
	PlaceId int

	foreign key (PlaceId) references Place(Id)
);

-- Change name Foody to Food
create table Foody
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	MiniType varchar(255),
	Price varchar(255),
	Note varchar(255),
	PicFileName varchar(255),
	PlaceId int

	foreign key (PlaceId) references Place(Id)
);

create table Gift
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	Price varchar(255),
	Note varchar(255),
	PicFileName varchar(255),
	PlaceId int

	foreign key (PlaceId) references Place(Id)
);

create table HomeStay
(
	Description varchar(255),
	Type varchar(255),
	AvgPrice varchar(255),
	Comment varchar(255),
	Star varchar(255),
	PicFileName varchar(255),
	PlaceId int primary key

	foreign key (PlaceId) references Place(Id)
);

-- Change name PlaceEvent to Event
create table PlaceEvent
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	Description varchar(255),
	PicFileName varchar(255),
	Details varchar(500),
	StartDate varchar(555),
	EndDate varchar(255),
	Status varchar(20),
	PlaceId int

	foreign key (PlaceId) references Place(Id)
);

-- Change name Event to Holiday
create table Event
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	Description varchar(255),
	PicFileName varchar(255),
	Details varchar(500),
	StartDate varchar(555),
	EndDate varchar(255),
	Status varchar(20),
	LocationId int

	foreign key (LocationId) references Location(Id)
);

create table Comment
(
	Id int identity(1,1) primary key,
	StarRating int,
	Pros varchar(255),
	Cons varchar(2000),
	CreatedBy varchar(255),
	PlaceId int

	foreign key (PlaceId) references Place(Id)
);

create table Article
(
	Id int identity(1,1) primary key,
	Name varchar(255),
	Type varchar(255),
	Description varchar(2000),
	PicFileName varchar(255),
	Status varchar(20),
);
go

-- DROP TABLE -------#####################################################################
/*
DROP TABLE dbo.Foody
DROP TABLE dbo.Location
DROP TABLE dbo.Clothes
DROP TABLE dbo.Event
DROP TABLE dbo.Gift
DROP TABLE dbo.HomeStay
DROP TABLE dbo.PlaceEvent
DROP TABLE dbo.Place
*/

-- INSERT TABLE -------####################################################################
INSERT INTO Place
(Name,Type,Slogan,Overview,Phone,Email,Facebook,LinkWeb,EventOfPlace,PicFileName) 
VALUES('Hoang Yen Buffet','Foody',
N'Hoàng Yến Buffet – Ăn đúng nơi, ngon đúng điệu',
'For a long time, Hoang Yen Buffet restaurants have become a familiar destination of gourmet in Saigon. With an extensive menu of over 60 lunch dishes and more than 70 buffet dinner dishes, the restaurant offers its diners a unique and exciting culinary journey. The dishes here are a combination of many different culinary styles and are also the enthusiasm of many experienced chefs.',
'02838233220','care@hoangyengroup.com','https://www.facebook.com/hoangyenbuffet','https://hoangyenbuffet.com/','','hoangyenbuffet.png');
go

INSERT INTO Location(Details,Street,Ward,District,City,PlaceId) VALUES('B3-27 Floor B3, 72','Le Thanh Ton','Ben Nghe','1','Ho Chi Minh','1');
INSERT INTO Location(Details,Street,Ward,District,City,PlaceId) VALUES('Floor 3, 19A','Cao Thang','2','3','Ho Chi Minh','1');
INSERT INTO Location(Details,Street,Ward,District,City,PlaceId) VALUES('Floor 5, 11','Su Van Hanh','12','1','Ho Chi Minh','1');
INSERT INTO Location(Details,Street,Ward,District,City,PlaceId) VALUES('Floor 4, 561','Dien Bien Phu','15','Binh Thanh','Ho Chi Minh','1');
INSERT INTO Location(Details,Street,Ward,District,City,PlaceId) VALUES('Floor 3, 30','Bo Bao Tan Thang','Son Ki','Tan Phu','Ho Chi Minh','1');
INSERT INTO Location(Details,Street,Ward,District,City,PlaceId) VALUES('Floor 5, 101','Tan Dat Tien','Tan Phu','7','Ho Chi Minh','1');
go

INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Balut','Buffet','Egg','','','hoangyenbalut.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Fried fish ball','Buffet','Fish','','Appetizer','hoangyenfriedfishball.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Mango salad','Buffet','Salad','','Salad and Soup','hoangyenmangosalad.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Broccoli','Buffet','Salad','','Salad and Soup','hoangyenbroccoli.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Sushi','Buffet','Sushi','','Main dishes','hoangyensushi.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Yang Chow fried rice','Buffet','Rice','','Main dishes','hoangyenfriedrice.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Tiramisu','Buffet','Cake','','Desserts','hangyentiramisu.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Muffin','Buffet','Cake','','Desserts','hoangyenmuffin.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Strongbow Gold','Drink','Beer','39000','','hoangyenstrongbowgold.png','1');
INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) VALUES('Heineken','Drink','Beer','29000','','hoangyenheineken.png','1');
go

select * from Foody

--INSERT INTO Clothes(Name,Type,Gender,RangeAge,Price,Note,PicFileName,PlaceId) VALUES('','','','','','','','');

select * from Clothes

--INSERT INTO Gift(Name,Type,Price,Note,PicFileName,PlaceId) VALUES('','','','','','');

select * from Gift

--INSERT INTO HomeStay(Description,Type,AvgPrice,Comment,Star,PicFileName,PlaceId) VALUES('','','','','','','');

select * from HomeStay

--INSERT INTO PlaceEvent(Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status,PlaceId) VALUES('','','','','','','','','');

select * from PlaceEvent

--INSERT INTO Event(Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status) VALUES('','','','','','','','');

select * from Event

--INSERT INTO Article(Name,Type,Description,PicFileName,Status) VALUES('','','','','');

select * from Article

go

-- TRIGGER --
create trigger Insert_Event
on Event
for insert
as
	begin
		if ((SELECT DATEDIFF(DD, StartDate, EndDate) FROM Event WHERE Id =(SELECT Id FROM inserted)) < 0)
		rollback tran
	end
go

create trigger Insert_PlaceEvent
on PlaceEvent
for insert
as
	begin
		if ((SELECT DATEDIFF(DD, StartDate, EndDate) FROM PlaceEvent WHERE Id =(SELECT Id FROM inserted)) < 0)
		rollback tran
	end
go