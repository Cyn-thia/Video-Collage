const db = require('../db/config');
const Model = {};

// for saving a new video
Model.create = videos => {
  return db.one(
    `
    INSERT INTO videos
    (collage_id, position, file_name)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [videos.collage_id, videos.position, videos.file_name]
  );
};

// gets videos for a collage
Model.showCollage = id => {
  return db.query(
    `
    SELECT *
    FROM videos
    WHERE collage_id = $1;
  `,
    [id]
  );
};

module.exports = Model
