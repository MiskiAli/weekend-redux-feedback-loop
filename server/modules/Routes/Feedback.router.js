const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST
router.post('/', (req, res) => {
    const addFeedback = req.body;
    console.log(req.body);

    const sqlText= `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    const sqlValue= [addFeedback.feeling, addFeedback.understanding, addFeedback.support, addFeedback.comments]

pool.query(sqlText, sqlValue).then((result) => {
    console.log('adding to database!', result);
    res.send(201)
}).catch ((error)=> {
        console.log('Error POST problem adding to database!', error);
        res.sendStatus(500);
    });
})


module.exports = router;

