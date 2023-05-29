const express = require('express')
const router = express.Router()
const pool = require ('../database')
router.get('/', (req, res) =>{
    res.render('index.hbs')
})
router.get('/carta', (req, res) =>{
    res.render('carta.hbs')
})
router.get('/registro', (req, res) =>{
    res.render('registro.hbs')
})
router.post('/registro', async (req, res) =>{
    const {usuario, email, contrasena, recontrasena} = req.body
    const newuser = {
        usuario,
        email,
        contrasena,
        recontrasena
      }
    let prueba = await pool.query('SELECT * FROM newuser')
    console.log(prueba)
    console.log(newuser)
    res.redirect('/')
} )
module.exports = router