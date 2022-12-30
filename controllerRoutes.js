const router = require('express').Router();
const fs = require('fs');
let db = require('./db/db.json');

router.get('/notes', (req, res) =>{
res.json(db)
}

);


router.post('/notes', (req, res) =>{
    let newNoteModel = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random()
    }
   db.push(newNoteModel)
   fs.writeFileSync('./db/db.json', JSON.stringify(db))
res.json(db)

}
) 


module.exports = router