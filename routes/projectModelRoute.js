const express = require('express');

const db = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
}); //Tested works

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
}); //Tested works

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;

  db
    .getProjectActions(id)
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status().json({ error: 'Error' });
    });
}); // Tested works

router.post('/', (req, res) => {
  const project = req.body;

  db
    .insert(project)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error' });
    });
}); // Tested works

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  let project;

  db
    .update(id, update)
    .then(count => {
      db.get(id).then(updatedProject => {
        res.status(200).json(updatedProject);
      });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error' });
    });
}); //Tested works

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
}); //Tested works

module.exports = router;
