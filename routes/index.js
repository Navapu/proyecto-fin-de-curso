const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index.hbs')
})
router.get('/carta', (req, res) =>{
    res.render('carta.hbs')
})
module.exports = router