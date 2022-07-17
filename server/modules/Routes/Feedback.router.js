const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET

// router.get('/', (req, res) => {
//     console.log('GET /feeling');
//     pool.query('SELECT * from "feeling";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/feeling', error)
//         res.sendStatus(500);
//     });
// })

// POST
router.post('/', async (req, res) => {
    const addFeedback = req.body;
    console.log(req.body);

    const sqlText= `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    const sqlValue= [addFeedback.feeling, addFeedback.understanding, addFeedback.support, addFeedback.comments]

pool.query(sqlText, sqlValue).then((database)=>{
    console.log('adding to database!', database);
    res.send(201)
}).catch ((error)=> {
        console.log('Error POST problem adding to database!', error);
        res.sendStatus(500);
    });
})


module.exports = router;