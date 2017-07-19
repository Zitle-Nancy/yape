const express         = require('express'); //Framework Express
const bodyParser      = require('body-parser'); //Parsea el post para obtener objetos json en el request
const levelup         = require('levelup'); // Base de datos
const morgan          = require('morgan'); // Sistema de logging (muestra en la cosa los request)
const morganjson      = require('morgan-json');
const apiUsers        = require('./api/users'); //Endpoints relacionados al User model

const app = express();
const db  = levelup('./api/users', {valueEncoding: 'json'});

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// tenemos acceso a todo lo que esta en public
app.use(express.static('public'));
app.use(morgan(format));

// ruta de la computadora
// var ruta = __dirname + '/node_modules';
// console.log(ruta);
app.use('/static',express.static(__dirname + '/node_modules' ));
app.use('/static',express.static(__dirname + '/public'));

let router = express.Router();

router.get('/', (req, res) => {
	// solo me crearia mi index
	// res.sendFile(__dirname + '/public/index.html');
	res.json({ name: 'yape-api',version: "0.0.1"});
});
// se esta creando una ruta donde va estar el api
app.use('/api',apiUsers(router,db));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});