const db = require('../db/config');
const Model = {};

// for saving a new video
Model.create = users => {
  return db.one(
    `
    INSERT INTO videos
    (fild_name)
    VALUES ($1)
    RETURNING *
  `,
    [users.file_name]
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
