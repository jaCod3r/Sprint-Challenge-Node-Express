const express = require('express');

const db = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions[0]);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get()
    .then(actions => {
      res.json(actions[0]);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
});

router.post('/', (req, res) => {
  const project = req.body;

  db
    .insert(project)
    .then(reponse => {
      res.status(201).json(response);
    })
    .catch(error => {
      error: 'Error';
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  let project;

  db
    .update(id, update)
    .then(count => {
      if (count > 0) {
        db.get(id).then(updatedProject => {
          res.status(200).json(updatedProject);
        });
      } else {
        res.status(404).json(error);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Error' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let project;

  db
    .get(id)
    .then(response => {
      project = { ...response[0] };
      db
        .remove(id)
        .then(reponse => {
          res.status(200).json(reponse);
        })
        .catch(error => {
          res.status(500).json({ error: 'Error' });
        });
    })
    .catch(error => {
      res.status(500).json(error => {
        error: 'Error';
      });
    });
});

module.exports = router;
