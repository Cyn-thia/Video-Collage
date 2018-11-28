const Model = require('../models/models');
const controller = {};

//saving a recorded rideo
controller.recVideo = (req, res) => {
  Model.create({
    file_name: req.body.file_name,
  })
  .then(obj => {
    res.json({
      message:'new video saved!',
      data: obj,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

//getting a collage
controller.show = (req, res) => {
  Model.showCollage(req.params.id)
    .then(obj => {
      res.json({
        message:'got new collage'
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

module.exports = controller;
