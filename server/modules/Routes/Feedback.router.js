const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET from the database

router.get('/', (req, res) => {
    console.log('GET /feeling');
    pool.query('SELECT * from "feeling";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feeling', error)
        res.sendStatus(500);
    });
})

