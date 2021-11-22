PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `users` (
  `id` VARCHAR(20) NOT NULL,
  `admin` TINYINT DEFAULT 0,
  `username` VARCHAR(255) NOT NULL,
  `pwordhash` VARCHAR(128) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) DEFAULT NULL,
  `session_id` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE `blogposts` (
  `id` VARCHAR(40) NOT NULL,
  `userid` VARCHAR(20) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` TEXT DEFAULT NULL,
  `content` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userid) REFERENCES users(id)
);

INSERT INTO users VALUES('a1111111',1,'alice','$argon2i$v=19$m=16,t=2,p=1$MmNhcVNUU2Qxa0VSYmRlNg$3hI5htWPWGLemA/QilOUCA','Alice Admin','/images/common/a1111111.png',NULL);
INSERT INTO users VALUES('a1111112',0,'bob',  '$argon2i$v=19$m=16,t=2,p=1$MmNhcVNUU2Qxa0VSYmRlNg$3hI5htWPWGLemA/QilOUCA','Bob User','/images/common/a1111112.png',NULL);
INSERT INTO users VALUES('a1111113',0,'trudy','$argon2i$v=19$m=16,t=2,p=1$MmNhcVNUU2Qxa0VSYmRlNg$3hI5htWPWGLemA/QilOUCA','Trudy Hacker','/images/common/a1111113.png',NULL);


INSERT INTO blogposts VALUES('4aa42e10-64fc-11e8-9aab-ddfb75a6b4ee','a1111111','2018-05-31 18:04:16','A Blog Post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat urna vitae diam tempus, eu sagittis metus porttitor. Duis arcu est, maximus quis velit ac, luctus ornare urna. Etiam nec justo tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ut leo dui. Vivamus dignissim, sem quis posuere congue, odio urna blandit sapien, at iaculis leo lacus vel turpis. Nullam non lacus ac odio molestie venenatis ac nec risus. Suspendisse eu rhoncus quam, id auctor felis. Donec tristique auctor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae porttitor ipsum. ');
INSERT INTO blogposts VALUES('5e910a60-64fc-11e8-9aab-ddfb75a6b4ee','a1111112','2018-05-31 18:03:42','How about that WDC?','Vivamus aliquam quis velit quis molestie. Donec a nisl ut erat placerat mollis eu sed enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non pretium lacus. Ut tristique neque ac est tincidunt mattis. Vivamus suscipit libero in dui aliquet feugiat. Nunc ac mi pellentesque, aliquet nulla sit amet, volutpat eros. Morbi elementum, elit non vehicula porta, metus quam dapibus ipsum, quis pretium quam purus vitae massa. Proin id massa suscipit, dignissim magna sed, ultricies lorem. Morbi sollicitudin porta leo, non accumsan neque. Morbi in elit et orci convallis pellentesque. Sed finibus ipsum blandit semper lacinia. Donec eget elementum justo, ut euismod magna. Nam dictum lacus sed elit cursus ultrices. ');
INSERT INTO blogposts VALUES('b418f1f0-64fc-11e8-9aab-ddfb75a6b4ee','a1111111','2018-05-31 18:01:55','Whoever said Latin was dead?','Aenean luctus eros eu justo rhoncus porttitor. Vestibulum tempus lectus quam, ut ultrices risus accumsan eget. Etiam viverra metus nibh, non fermentum ipsum tempus eget. In dignissim porta diam, quis molestie augue euismod et. Sed eu enim metus. Aliquam vestibulum nisi convallis libero facilisis dignissim. Integer pharetra ut ipsum non ultrices. Cras ut sollicitudin lacus. Phasellus mauris turpis, laoreet semper sollicitudin ac, sagittis eget ipsum. ');
INSERT INTO blogposts VALUES('9b1c27d0-64fc-11e8-9aab-ddfb75a6b4ee','a1111112','2018-05-31 18:01:13','SentencePress is worse than it looks','Nunc pulvinar tortor arcu, in interdum arcu rutrum eget. Vestibulum semper tellus dictum mauris condimentum ultrices at at dolor. Donec et est vitae felis luctus congue. Vivamus eget nibh ac massa molestie auctor. Phasellus pulvinar quis quam et maximus. Ut fermentum feugiat justo, eu finibus lectus luctus quis. Vestibulum ullamcorper turpis auctor, egestas lacus id, tincidunt mauris. Etiam cursus auctor euismod. Aliquam pharetra nulla non dolor rutrum luctus. Pellentesque efficitur quam in justo gravida, sed placerat mi fringilla. ');
INSERT INTO blogposts VALUES('f4210120-64fc-11e8-9aab-ddfb75a6b4ee','a1111111','2018-05-31 17:59:31','Thank goodness it''s Friday!','Pellentesque euismod nisl ac fringilla porttitor. Maecenas ornare risus eu nulla pellentesque, in aliquam risus vehicula. Nunc eu augue tincidunt massa malesuada faucibus. Aenean non congue turpis. In luctus sit amet lectus ut blandit. Mauris imperdiet, risus sed mattis sodales, nunc dolor hendrerit magna, eu ultrices sapien risus vel nisi. Curabitur orci tortor, hendrerit sed ipsum placerat, convallis euismod leo. Proin eleifend lobortis magna non sagittis. Proin fermentum in justo quis eleifend. Curabitur tristique eu libero a auctor. Maecenas a urna lacus. Vestibulum semper mauris ligula, a porta enim elementum vel. ');
INSERT INTO blogposts VALUES('08853050-64fd-11e8-9aab-ddfb75a6b4ee','a1111112','2018-05-31 17:58:58','You made it to page 2!','NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN NYAN');

COMMIT;

