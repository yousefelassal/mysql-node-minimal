const express = require('express');
const router = express.Router();
const db = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM customer', (err, rows) => {
    if (err) {
      console.log(err)
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
