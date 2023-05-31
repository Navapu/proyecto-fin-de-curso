const express = require('express')
const router = express.Router()
const pool = require ('../database')
const bcrypt = require('bcrypt')
router.get('/', (req, res) =>{
    if(req.session.loggedin == true){
        res.render('index.hbs', {name: req.session.name})
    }else{
        res.render('index.hbs')
    }
})
router.get('/carta', (req, res) =>{
    res.render('carta.hbs')
})
router.get('/registro', (req, res) =>{
    if(req.session.loggedin != true){
        res.render('registro.hbs')
    }else{
        res.redirect('/')
    }
})
router.post('/registro', async (req, res) =>{
    const {usuario, email, contrasena} = req.body
    bcrypt.hash(contrasena, 12).then( async hash => {
        const encriptada = hash;
        const newuser = {
            usuario,
            email,
            encriptada
          }
          const check = await pool.query('SELECT * FROM newuser WHERE email = ?', [email])
          if (check[0].length > 0){
            res.render('registro.hbs', {error: 'Este usuario ya existe'});
          }else{
            await pool.query('INSERT INTO newuser SET ?',[newuser])
            res.redirect('/')
          }
      })
})
router.get('/login', (req, res) =>{
    if(req.session.loggedin != true){
        res.render('login.hbs')
    }else{
        res.redirect('/')
    }
})
router.post('/login', async (req, res) =>{
    const{email, contrasena} = req.body
    const check = await pool.query('SELECT * FROM newuser WHERE email = ?', [email])
    if (check[0].length > 0){
        check[0].forEach (element => {
            bcrypt.compare(contrasena , element.encriptada, (err,isMatch)=>{
                if(!isMatch){
                res.render('login.hbs', {error: 'Contraseña incorrecta'})
                }else{
                    req.session.loggedin = true
                    req.session.name = element.usuario
                    res.redirect('/')
                }
            })
        })
        }else{
            res.render('login.hbs', {error: 'No existe ninguna cuenta con este correo eletrónico'})
        }
})
router.get('/logout', (req, res) => {
    if(req.session.loggedin == true){
        req.session.destroy();
        res.redirect('/')
    }else{
        res.redirect('/login')
    }
})
router.get('/pide', (req, res) => {
    res.render('pide.hbs')
})
module.exports = router