const express = require('express');

const db = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
});

router.get('/id', (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
});

module.exports = router;
