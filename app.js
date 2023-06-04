const express = require ('express')
const path = require('path')
const {engine} = require('express-handlebars')
const myconecction = require('express-myconnection')
const bodyParser = require('body-parser')
const pool = require ('./database.js')
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');const app = express()
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir:  path.join(app.get('views'), 'layouts'),
  partialsDir:  path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))

const client = redis.createClient(); // Crea una instancia del cliente de Redis

app.use(session({
  store: new RedisStore({ client: client }), // Configura el almacén de sesiones de Redis
  secret: 'tfg', // Reemplaza con tu propia clave secreta
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
const indexRouter = require('./routes/index')
app.listen(3000)
console.log('Escuchando en el puerto 3000')


app.use('/', indexRouter)
module.exports = app