import express from 'express';
import connection from './conf';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  connection.query('SELECT * FROM wildcircus', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      res.json(results);
    }
  });
});

router.post('/post', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO wildcircus SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'enregistrement");
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/spectacle', (req, res) => {
  connection.query('SELECT * FROM spectacle', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      res.json(results);
    }
  });
});

router.post('/spectacle/post', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO spectacle SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'enregistrement");
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/deletespectacle/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM spectacle WHERE id = ?', id, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
});

router.put('/modifyspec/:id', (req, res) => {
  const { id } = req.params;
  const form = req.body;
  connection.query('UPDATE spectacle SET ? WHERE id = ?', [form, id], (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(201);
  });
});

router.delete('/deletebook/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM wildcircus WHERE id = ?', id, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
});

export default router;
