\c video_db;

DROP TABLE IF EXISTS collages;
CREATE TABLE collages (
  collage_id SERIAL PRIMARY KEY,
  layout INT
);

DROP TABLE IF EXISTS videos;
CREATE TABLE videos (
  video_id SERIAL PRIMARY KEY,
  collage_id INT NOT NULL,
  position INT,
  file_name VARCHAR(255)
);

INSERT INTO videos VALUES (1, 1, 1,'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/2fabbdac-1535-47b4-9b93-bbf193389fd9.mp4');
INSERT INTO videos VALUES (2, 1, 2, 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/521652e5-fde7-4a9d-a216-f9953b2a751b.mp4');
INSERT INTO videos VALUES (3, 1, 3, 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/4bea576c-84b9-4cde-bb04-92ddd0498cab.mp4');
INSERT INTO videos VALUES (4, 1, 4, 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/0b0656bd-29ed-4d74-825e-2a2c0138e2ff.mp4');
INSERT INTO videos VALUES (5, 1, 5, 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/36ac6457-c97d-4c5e-b2e8-cb4cec9d4c67.mp4');
INSERT INTO collages VALUES (1, 1);
