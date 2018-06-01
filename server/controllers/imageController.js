const { imageModel } = require('../models/imageModel.js');

const imageController = {
  get: (req, res) => {
    console.log('GET request object')
    imageModel.get(req.query.product_id, (err, data) => {
      if (err) {
        console.log('GET imageController error,', err``);
        res.send(err).status(400);
      }
      console.log('GET imageController successful');
      res.send(data).status(200);
    })
  },
  //post: () => {} 
}

module.exports = {
  imageController: imageController
}