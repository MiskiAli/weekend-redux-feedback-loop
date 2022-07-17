const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = express.Router();


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

// router.get('/', (req, res) => {
//     console.log('GET /feeling');
//     pool.query('SELECT * from "feeling";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /feeling', error)
//         res.sendStatus(500);
//     });
// })


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});