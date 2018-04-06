const express = require('express');

const db = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status(404).json({ error: 'Some error' });
    });
}); //Tested works

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status(404).json({ error: 'Error' });
    });
}); //Tested works

router.post('/', (req, res) => {
  const action = req.body;
  db
    .insert(action)
    .then(response => {
      console.log('response', response);

      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  let action;

  db
    .update(id, update)
    .then(count => {
      if (count > 0) {
        db.get(id).then(updatedAction => {
          res.status(200).json(updatedAction);
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
  let action;

  db
    .get(id)
    .then(response => {
      action = { ...response[0] };
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
