const express = require('express');
const router = express.Router();
const db = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM customers', (err, rows) => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
