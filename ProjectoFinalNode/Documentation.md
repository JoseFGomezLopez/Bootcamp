

Para una mejor experiencia visual --> https://www.notion.so/Proyecto-BACKEND-Cities-94a828f8dff94b15a7e174756fac1015

Proyecto BACKEND Cities Introducción Este se trata de un proyecto de construcción de backend para un hipotético foro sobre ciudades. En esta Base de Datos identificamos 4 colecciones de objetos relacionadas entre sí: ciudades lugares comentarios usuarios Además, los usuarios pueden ser de 3 tipos: usuario no logueado usuario logueado administrador Todos los usuarios dentro del foro tienen la posibilidad de acceder a las distintas ciudades, los lugares y los comentarios. Estos modelos se relacionan de la siguiente manera: Las ciudades contienen un array de lugares, además de información propia. Los lugares a su vez contienen un array de comentarios Estos comentarios están vinculados al usuario que los escribió Los usuarios constan de un array de comentarios realizados Este sería un resumen del planteamiento inicial del proyecto:

Arquitectura hexagonal Se trata de una metodología destinada a desarrollar una aplicación de forma aislada a su Base de Datos.

La intención de esta arquitectura es separar de forma explícita el lado del usuario, la lógica de negocio y el servidor. Esta metodología es apropiada para proyectos de gran envergadura, donde es necesario construir la Base de Datos de manera que sea escalable en un futuro, por si el proyecto creciera. Aunque en este proyecto no sería necesario usar esta arquitectura (puesto que no va a escalar a millones de usuarios), hemos decidido utilizarla con el fin de adquirir un mayor conocimiento sobre su manejo. Hemos usado Mongo Atlas como Base de Datos alojada en la nube y la librería mongoose para conectarnos a ella. Estructura de carpetas Tenemos una carpeta principal a la que nombraremos src. Dentro de esta encontraríamos las siguientes subcarpetas: Controller: donde tenemos las rutas definidas asociadas a cada función de CRUD. Domain: Entities: Los esquemas y modelos de cada colección, en este ejemplo: cities, comments, places, users. Orm: Funciones CRUD básicas de cada colección + algunas propias como búsqueda por parámetros… etc. Repositories: Definimos a qué Base de Datos atacaremos, y la configuración de los modelos que vamos a conectar a ella. Services: Definición de las respuestas y el control de errores. Helpers: Configuración para la conexión a la cuenta de Cloudinary asociada. Middlewares: Una función de autenticación basada en la existencia de token y otra basada en el rol del usuario que lanza la petición (admin). Además, otra función que ejecuta la subida de ficheros de tipo imagen a Cloudinary. Routes: Definición de la ruta principal. Server: Ejecución de CORS y Gzipped. Implementación del servidor a todas las rutas previamente creadas. Test: Guardado de los test unitarios realizados. Utils: Función setError para estandarizar el control de errores. enum: Definiremos una serie de colores para los distintos logs informativos a través de la terminal y mensajes de status con su correspondiente código numérico. magic: Definiremos la función que generará la respuesta a nuestros servicios y unas sencillas funciones que imprimirán de ciertos colores los mensajes informativos en nuestra terminal. Fuera de src tenemos el siguiente archivo: config.yml: Definición del archivo de configuración con el objeto y arrays mutables. Pasos para la realización del proyecto

    Instalación y configuración En primer lugar crearemos una carpeta con el nombre de nuestro proyecto y lo iniciaremos con el siguiente comando, el cual genera un package.json con una configuración básica por defecto: npm init -y Lo siguiente es la instalación de nuestras dependencias, librerías y frameworks necesarios para trabajar: npm express mongoose dotenv cors config-yml bcrypt Además, utilizaremos ESLint y Prettier para definir nuestras normas de indentado y escritura, de manera que nuestro código se vea limpio y uniforme. Será necesario crear los siguientes archivos y ejecutar el siguiente código: 🟦 .eslintignore 🟥 .eslintrc.js 🟪 .prettierrc.json npm i eslint eslint-config-prettier prettier Instalamos también nodemon, que vigila el sistema de archivos y reinicia automáticamente todos los procesos. npm i nodemon En nuestro package.json debemos además configurar los siguientes scripts: "scripts": { "start": "node index.js", "dev": "nodemon index.js", "test": "jest --runInBand --detectOpenHandles --forceExit", },

    Ficheros básicos En la carpeta domain > entities, creamos un archivo por cada colección en el que definiremos su esquema y modelo. Un esquema de mongoose es una estructura JSON tipada que contiene información acerca de las propiedades de un documento. Estas propiedades pueden ser declaradas como requeridas, únicas, tener un valor por defecto…etc. Los modelos dentro de NodeJS van a representar a una entidad de la Base de Datos y más concretamente van a representar a un único registro o documento de nuestra Base de Datos. Antes de utilizar los modelos de manera apropiada, es necesario definir sus esquemas. module.exports = (db) => { const citySchema = new db.Schema( { name: { type: String, required: true, unique: true }, country: { type: String, required: true }, population: { type: String, required: true }, mapImage: { type: String }, history: { type: String }, places: [{ type: db.Schema.Types.ObjectId, ref: 'Places' }], }, { timestamps: true, } ); return db.model('Cities', citySchema); }; Realizamos el mismo proceso con el resto de esquemas: Comments Places Users En la carpeta domain > orm, establecemos las funciones CRUD de cada colección y algunas propias, como búsqueda por parámetros, por id, nombre, autor… En este fichero solo vamos a desarrollar la lógica de éstas, en términos de buscar dentro de la colección el modelo y modificar o borrar sus valores. exports.Update = async (id, updatedCity, req) => { try { const olderCity = await conn.db.connMongo.City.findById(id);

    olderCity.mapImage && deleteFile(olderCity.mapImage);
    req.file
      ? (updatedCity.mapImage = req.file.path)
      : (updatedCity.mapImage = "there's no image");

    return await conn.db.connMongo.City.findByIdAndUpdate(id, updatedCity);

    } catch (error) { magic.LogDanger('Cannot Update city', error); return await { err: { code: 123, message: error } }; } }; En la carpeta domain > services, aquí gestionamos los errores y las respuestas del servidor en base a las peticiones realizadas. En estas funciones pasamos los valores de las requests a nuestras funciones del orm ejecutándolas. exports.Update = async (req, res) => { let status = 'Success', errorcode = '', message = '', data = '', statuscode = 0, response = {}; try { const { id } = req.params;

    const updatedCity =  {
      name: req.body.name,
      country: req.body.country,
      population: req.body.population,
      history: req.body.history,
      places: req.body.places,
      _id: id,
    };

    if (id && updatedCity) {
      let respOrm = await ormCity.Update(id, updatedCity, req);

      if (respOrm.err) {
        (status = 'Failure'),
          (errorcode = respOrm.err.code),
          (message = respOrm.err.messsage),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = 'City updated'), (statuscode = enum_.CODE_OK);
      }
    } else {
      (status = 'Failure'),
        (errorcode = enum_.ERROR_REQUIRED_FIELD), //este error no cuadra
        (message = 'id does not exist'),
        (statuscode = enum_.CODE_UNPROCESSABLE_ENTITY);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);

    } catch (err) { console.log('err = ', err); return res .status(enum*.CODE_INTERNAL_SERVER_ERROR) .send( await magic.ResponseService('Failure', enum*.CRASH_LOGIC, 'err', '') ); } }; En la carpeta domain > repositories, comprobamos que exista en nuestro fichero config la clave mongodb dentro de db y que tenga longitud. Si se cumple, recorremos mongodb y por cada una de las conexiones que le inyectemos generaremos claves nuevas en nuestro objeto db local. Además de la clave, le pasaremos mongoose tal como definimos en el modelo, para que desde el propio modelo gestione la conexión con Mongo. Y exportamos db para utilizarlo en cualquier punto. const config = require('config-yml'); const mongoose = require('mongoose'); const magic = require('../../utils/magic'); const city = require('../entities/entity-city'); const comment = require('../entities/entity-comment'); const place = require('../entities/entity-place'); const user = require('../entities/entity-user'); const dotenv = require('dotenv'); const { setUpCloudinary } = require('../../helpers/cloudinary');

dotenv.config();

let db = {};

if (config.db.mongodb && config.db.mongodb.length > 0) { config.db.mongodb.map((c) => { // Recorre las propiedades de mongodb de Atlas, indicamos objetos de configuración mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, }); db[c.nameconn] = {}; db[c.nameconn].conn = mongoose; db[c.nameconn].City = city(mongoose); db[c.nameconn].Comment = comment(mongoose); db[c.nameconn].Place = place(mongoose); db[c.nameconn].User = user(mongoose); }); exports.db = db;

setUpCloudinary();

magic.LogInfo('Conectado a la base de datos'); } else { magic.LogDanger('No existe la base de datos'); } Para que esta conexión funcione, debemos también crear un archivo .env donde configurar nuestras variables de entorno. Aquí declaramos diversas variables globales que iremos completando según avancemos en el proyecto. En este punto podemos copiar la dirección de nuestra Base de Datos, que tenemos en Mongo Atlas. MONGO_URI=mongodb+srv://:@cluster0.zfisqcg.mongodb.net/?retryWrites=true&w=majority SECRET_KEY_JWT=

CLOUD_NAME= API_KEY= API_SECRET= En la carpeta controller tendremos un fichero index.js, en el que estableceremos las distintas rutas asociadas a las funciones CRUD definidas en las carpetas anteriores. Posteriormente actualizaremos este fichero con middlewares. const express = require('express'); const router = express.Router(); const cities = require('../domain/services/service-city'); const comments = require('../domain/services/service-comment'); const places = require('../domain/services/service-place'); const users = require('../domain/services/service-user');

router.get('/cities', cities.GetAll); router.post('/cities', cities.Create); router.delete('/cities/:id', cities.Delete); router.patch ('/cities/updateCity/:id', cities.Update); router.get('/cities/:id', cities.GetById); router.get('/cities/city/:name', cities.GetByName); router.get('/cities/country/:country', cities.GetByCountry);

router.get('/comments', comments.GetAll); router.post('/comments', comments.Create); router.delete('/comments/:id', comments.Delete); router.patch('/comments/:id', comments.Update); router.get('/comments/author/:authorId', comments.GetByAuthorId);

router.get('/places', places.GetAll); router.post('/places, places.Create); router.delete('/places/:id', places.Delete); router.patch('/places/:id', places.Update); router.get('/places/:id', places.GetById); router.get('/places/place/:name', places.GetByName);

router.get('/users', users.GetAll); router.post('/users', users.Create); router.delete('/users/:id', users.Delete); router.patch('/users/:id', users.Update); router.get('/users/:id', users.GetById); router.get('/users/user/:name', users.GetByName); router.post('/users/user/login', users.Login);

module.exports = router; En la carpeta server creamos un archivo index.js en el cual realizamos la implementación del servidor a todas las rutas previamente definidas y también ejecutamos CORS (para reforzar la seguridad) y Gzipped (para la compresión del proyecto y así reducir su peso). npm i cors compression --save const express = require('express'); const cors = require('cors'); const dotenv = require('dotenv').config(); const compression = require('compression');

const app = express();

app.use(compression());

app.use(cors());

app.use(express.json()); app.use(express.urlencoded({ extended: true }));

app.set('secretKey', process.env.SECRET_KEY_JWT);

require('../routes')(app);

app.disable('x-powered-by');

module.exports = app; En la carpeta utils > errors tenemos un archivo setError.js en el cual definimos la función de control de errores: const setError = (code, message) => { const error = new Error(); error.code = code; error.message = message; return error; }; module.exports = { setError }; Además tenemos el archivo enum.js //Definimos los colores que mostrar en la terminal exports.BLACK_LOG = '\x1b[30m%s\x1b[0m'; exports.RED_LOG = '\x1b[31m%s\x1b[0m'; exports.GREEN_LOG = '\x1b[32m%s\x1b[0m'; exports.YELLOW_LOG = '\x1b[33m%s\x1b[0m'; exports.BLUE_LOG = '\x1b[34m%s\x1b[0m'; exports.MAGENTA_LOG = '\x1b[35m%s\x1b[0m'; exports.CYAN_LOG = '\x1b[36m%s\x1b[0m'; exports.WHITE_LOG = '\x1b[37m%s\x1b[0m';

//Definimos los valores numéricos para diferentes códigos de estado exports.CODECONTINUE = 100; exports.CODE_SWITCHING_PROTOCOLS = 101; exports.CODE_PROCESSING = 102; exports.CODE_EARLYHINTS = 103; exports.CODE_OK = 200; exports.CODE_CREATED = 201; exports.CODE_ACCEPTED = 202; exports.CODE_NO_AUTHORITATIVE = 203; exports.CODE_NO_CONTENT = 204; exports.CODE_RESET_CONTENT = 205; exports.CODE_PARTIAL_CONTENT = 206; exports.CODE_MULTI_STATUS = 207; exports.CODE_ALREDY_REPORTED = 208; exports.CODE_IM_USED = 226; exports.CODE_MULTIPLE_CHOICES = 300; exports.CODE_MOVED_PERMANENTLY = 301; exports.CODE_FOUND = 302; exports.CODE_SEE_OTHER = 303; exports.CODE_NOT_MODIFIED = 304; exports.CODE_USE_PROXY = 305; exports.CODE_SWITCH_PROXY = 306; exports.CODE_TEMPORARY_REDIRECT = 307; exports.CODE_PERMANENT_REDIRECT = 308; exports.CODE_BAD_REQUEST = 400; exports.CODE_UNAUTHORIZED = 401; exports.CODE_PAYMENT_REQUIRED = 402; exports.CODE_FORBIDDEN = 403; exports.CODE_NOT_FOUND = 404; exports.CODE_METHOD_NOT_ALLOWED = 405; exports.CODE_NOT_ACEPTABLE = 406; exports.CODE_PROXY_AUTHENTICATION_REQUIRED = 407; exports.CODE_REQUEST_TIMEOUT = 408; exports.CODE_CONFLICT = 409; exports.CODE_GONE = 410; exports.CODE_LENGTH_REQUIRED = 411; exports.CODE_PRECONDITION_FAILED = 412; exports.CODE_PAYLOAD_TOO_LARGE = 413; exports.CODE_URI_TOO_LONG = 414; exports.CODE_UNSUPPORTED_MEDIA_TYPE = 415; exports.CODE_RANGE_NOT_SATISFIABLE = 416; exports.CODE_EXPECTATION_FAILED = 417; exports.CODE_IAM_A_TEAPOT = 418; exports.CODE_MISDIRECTED_REQUEST = 421; exports.CODE_UNPROCESSABLE_ENTITY = 422; exports.CODE_LOCKED = 423; exports.CODE_FAILED_DEPENDENCY = 424; exports.CODE_TOO_EARLY = 425; exports.CODE_UPGRADE_REQUIERED = 426; exports.CODE_PRECONDITION_REQUIRED = 428; exports.CODE_TOO_MANY_REQUESTS = 429; exports.CODE_REQUEST_HEADER_FIELDS_TOO_LARGE = 431; exports.CODE_UNAVAILABLE_FOR_LEGAL_REASONS = 451; exports.CODE_INTERNAL_SERVER_ERROR = 500; exports.CODE_NOT_IMPLEMENTED = 501; exports.CODE_BAD_GATEWAY = 502; exports.CODE_SERVICE_UNAVAILABLE = 503; exports.CODE_GETWAY_TIMEOUT = 504; exports.CODE_HTTP_VERSION_NOT_SUPPORTED = 505; exports.CODE_VARIANT_ALSO_NEGOTIATES = 506; exports.CODE_INSUFFICIENT_STORAGE = 507; exports.CODE_LOOP_DETECTED = 508; exports.CODE_NOT_EXTENDED = 509; exports.CODE_NETWORK_AUTHENTICATION_REQUIRED = 511; Y por último magic.js const enum = require('./enum');

exports.ResponseService = async (status, errorCode, message, data) => { return await { status: status, info: { errorCode: errorCode, message: message, data: data }, }; };

exports.LogSuccess = (msg) => { console.log(enum*.GREEN_LOG, msg); }; exports.LogInfo = (msg) => { console.log(enum*.CYANLOG, msg); }; exports.LogWarning = (msg) => { console.log(enum.YELLOWLOG, msg); }; exports.LogDanger = (msg) => { console.log(enum.RED_LOG, msg); }; 3. Concepto de Middlewares El middleware es el software que brinda servicios y funciones comunes a las aplicaciones, además de lo que ofrece el sistema operativo. Generalmente, se encarga de la gestión de los datos, los servicios de aplicaciones, la mensajería, la autenticación y la gestión de las API. Ayuda a los desarrolladores a diseñar aplicaciones con mayor eficiencia. Además, actúa como hilo conductor entre las aplicaciones, los datos y los usuarios. 3.1. Middlewares Cloudinary Algunas de nuestras colecciones constan de imágenes, por ejemplo, en el caso de las ciudades, un mapa de ésta. Para poder subir estos archivos directamente desde nuestro equipo, sin copiar la url como haríamos en un json, podemos utilizar Cloudinary. Esta es una herramienta para el almacenado de archivos en la nube. Las ventajas a tener en cuenta son que reduce el peso en tu BD, y que al estar separados en distintas urls la información es más complicado su hackeo. Será necesario tener una cuenta y guardar estos datos en nuestro archivo .env

Instalaciones npm i cloudinary multer multer-storage-cloudinary Multer es un "middleware" de node. js para el manejo de multipart/form-data. La librería Cloudinary permite integrar rápida y fácilmente su aplicación con Cloudinary. En la carpeta helpers, creamos el fichero cloudinary.js, en el que configuramos las claves de acceso del mismo. Utilizamos una función de la librería de cloudinary para ejecutar la configuración. const cloudinary = require('cloudinary');

const setUpCloudinary = () => { cloudinary.config({ cloud_name: process.env.CLOUD_NAME, api_key: process.env.API_KEY, api_secret: process.env.API_SECRET, }); };

module.exports = { setUpCloudinary }; En la carpeta middlewares, creamos dos ficheros llamados file.js y delete.file.js. En el fichero file requerimos las librerías y middleware instalados y establecemos las pautas de almacenaje que serán validas en la subida de ficheros. const multer = require('multer'); const cloudinary = require('cloudinary').v2; const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: 'cities_project', allowedFormats: ['jpg', 'png', 'jpeg', 'gif'], }, });

const upload = multer({ storage });

module.exports = { upload }; En el fichero delete-file.js requerimos la librería cloudinary y generamos la función que eliminará nuestro fichero de su almacenaje en la nube. const cloudinary = require('cloudinary').v2;

const deleteFile = (imgUrl) => { const imgSplited = imgUrl.split('/'); const nameSplited = imgSplited[imgSplited.length - 1].split('.'); const folderSplited = imgSplited[imgSplited.length - 2]; const public_id = ${folderSplited}/${nameSplited[0]}; cloudinary.uploader.destroy(public_id, () => { console.log('Image delete in cloudinary'); }); };

module.exports = { deleteFile }; Una vez instalados y configurados cloudinary, iremos a actualizar en la carpeta controllers las rutas para establecer el middleware efectivamente. Requeriremos upload de la carpeta middleware/file y ejecutaremos una función entre la ruta y la función CRUD que se ejecuta en ella. router.post('/cities', upload.single('mapImage'), cities.Create); 3.2. Middlewares Protección de rutas En nuestro proyecto tenemos dos middlewares que se encargan de la protección de rutas, verificando a través de un token la autenticidad del usuario que lanza las peticiones . Necesitamos instalar una librería más, que se encargará de generar estos tokens: npm i jsonwebtoken bcrypt Cuando uno de los usuarios registrados se loguea, le es asignado un token si la contraseña introducida coincide con la almacenada en la Base de Datos. Destacar que estas contraseñas han sido encriptadas utilizando la librería bcrypt. En el archivo orm-user.js a la hora de definir las funciones de Create y Update será necesario también encriptar la contraseña: exports.Update = async (id, updatedUser, req) => { try { const olderUser = await conn.db.connMongo.User.findById(id); olderUser.avatar && deleteFile(olderUser.avatar); req.file ? (updatedUser.avatar = req.file.path) : (updatedUser.avatar = "there's no image");

updatedUser.password = bcrypt.hashSync(updatedUser.password, 10);
return await conn.db.connMongo.User.findByIdAndUpdate(id, updatedUser);

} catch (error) { magic.LogDanger('Cannot Update user', error); return await { err: { code: 123, message: error } }; } }; Además podemos hacer más restrictiva la autenticación añadiendo privilegios a los usuarios en función de su rol. En el caso de los administradores, por ejemplo, que únicamente ellos puedan borrar y modificar la información de las ciudades o los lugares. Para ello será necesario que el token incluya esta información , de manera que nuestro middleware pueda verificarlo luego. Previamente en nuestra función de Login, en el fichero orm-user.js debemos generar este token: exports.Login = async (nickname, req) => { try { const userInfo = await conn.db.connMongo.User.findOne({ nickname: nickname, });

if (bcrypt.compareSync(req.body.password, userInfo.password)) {
  userInfo.password = null;
  const token = jwt.sign(
    {
      id: userInfo._id,
      name: userInfo.name,
      nickname: userInfo.nickname,
      email: userInfo.email,
      role: userInfo.role,
    },
    req.app.get('secretKey'),
    { expiresIn: '30h' }
  );
  return {
    user: userInfo,
    token: token,
  };
} else {
  return console.log('Incorrect password');
}

} catch (error) { magic.LogDanger('Cannot log in the user', error); return await { err: { code: 123, message: error } }; } }; En el archivo admin.middleware.js verificamos la información del token: const jwt = require('jsonwebtoken');

const { setError } = require('../utils/errors/setError');

const isAdmin = (req, res, next) => { const authorization = req.headers.authorization;

if (!authorization) return res.json(setError(401, 'Not authorized'));

const splits = authorization.split(' ');

if (splits.length != 2 || splits[0] != 'Bearer') return res.json(setError(400, 'Not Bearer'));

const jwtStringify = splits[1];

try { var token = jwt.verify(jwtStringify, req.app.get('secretKey')); } catch (error) { return next(setError(500, 'Token invalid')); }

const authority = { id: token.id, name: token.name, role: token.role, };

if (token.role === 'admin') { req.authority = authority; next(); } else { next(setError(401, 'Not authorized')); } };

module.exports = { isAdmin }; Llegados a este punto, debemos actualizar de nuevo la carpeta de controller, en el fichero index.js const express = require('express'); const router = express.Router(); const cities = require('../domain/services/service-city'); const comments = require('../domain/services/service-comment'); const places = require('../domain/services/service-place'); const users = require('../domain/services/service-user'); const { isAuth } = require('../middlewares/auth.middleware'); const { isAdmin } = require('../middlewares/admin.middleware'); const { upload } = require('../middlewares/file');

router.get('/cities', cities.GetAll); router.post('/cities', upload.single('mapImage'), cities.Create); router.delete('/cities/:id', [isAdmin], cities.Delete); router.patch( '/cities/updateCity/:id', [isAdmin], upload.single('mapImage'), cities.Update ); router.get('/cities/:id', cities.GetById); router.get('/cities/city/:name', cities.GetByName); router.get('/cities/country/:country', cities.GetByCountry);

router.get('/comments', comments.GetAll); router.post('/comments', [isAuth], comments.Create); router.delete('/comments/:id', [isAuth], comments.Delete); router.patch('/comments/:id', [isAuth], comments.Update); router.get('/comments/author/:authorId', comments.GetByAuthorId);

router.get('/places', places.GetAll); router.post('/places', [isAdmin], upload.single('image'), places.Create); router.delete('/places/:id', [isAdmin], places.Delete); router.patch('/places/:id', [isAdmin], upload.single('image'), places.Update); router.get('/places/:id', places.GetById); router.get('/places/place/:name', places.GetByName);

router.get('/users', [isAdmin], users.GetAll); router.post('/users', /_ upload.single('avatar'), _/ users.Create); router.delete('/users/:id', [isAdmin], users.Delete); router.patch('/users/:id', [isAuth], upload.single('avatar'), users.Update); router.get('/users/:id', [isAdmin], users.GetById); router.get('/users/user/:name', [isAdmin], users.GetByName); router.post('/users/user/login', users.Login);

module.exports = router; 4. Fichero index.js En la raíz, creamos el archivo index.js, en él se ejecutarán dos funciones. La primera para levantar el servidor y la segunda para controlar posibles errores. const config = require('config-yml'); const app = require('./src/server'); const magic = require('./src/utils/magic');

app.listen(config.port, () => { magic.LogInfo(Server running on http://localhost:${config.port}); });

app.on('error', (err) => { magic.LogDanger(err); }); 5. Testing Para realizar tests unitarios necesitaremos jest, que es un framework desarrollado por Facebook, el cual nos permite mockear cualquier objeto. También instalaremos la librería supertest, que nos permite enviar peticiones al server y obtener resultados. Los instalamos: npm i jest supertest En este caso vamos a testear la función Create para la colección de ciudades. Este test simula una petición y comprueba que todo funciona. Se ejecuta con el siguiente comando que debemos incluir en los scripts del package.json. npm run test const request = require('supertest'); const app = require('../server');

describe('Post Cities', () => { it('should create a new city', async () => { const res = await request(app) .post('/api/v1/cities/') .send({ name: 'Madrid', country: 'Spain', population: '3.8m', mapImage: 'https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg', history: 'La capi', places: ['637f3a9f7b90c8336076dba9'], }); expect(res.statusCode).toEqual(201); expect(res.body.status).toEqual('Success'); }); }); 6. Seed by Web Scraping 6.1. Estructura de carpetas Carpeta principal a la que nombraremos seed Subcarpetas: src city: contiene el fichero citySchema.js donde definimos el esquema y los modelos con lo que nos conectaremos a la BBDD. Fichero .env, aquí configuramos un puerto distinto al definido en la arquitectura hexagonal, y la URI a MongoDB. Archivo index.js, que es donde realizaremos el scraping, generaremos el objeto y estableceremos la conexión usando mongoose y express. Borraremos la colección y guardaremos el objeto scrapeado. Para realizar estos pasos debemos instalar la librería puppeteer, o cualquier otra que nos permita scrapear, como cheerio o cypress. npm i puppeteer const puppeteer = require("puppeteer"); const fs = require("fs"); const http = require("http"); const dotenv = require("dotenv").config(); const mongoose = require("mongoose"); const City = require("./src/city/citySchema"); const cors = require("cors"); const express = require("express"); const mongoURI = process.env.MONGO_URI;

const browserURL = async () => { const browser = await puppeteer.launch();

const page = await browser.newPage(); await page.goto(https://es.wikipedia.org/wiki/Tarragona);

const cityInfo = await page.$$eval("#bodyContent", (nodes) => { return nodes.map((node) => ({ name: node.querySelector(".cabecera.mapa.fn.org")?.innerText, country: node.querySelector("[title='España']")?.innerText, population: node.querySelector("tr:nth-child(17) > td")?.innerText, mapImage: node.querySelector( ".mw-kartographer-map.mw-kartographer-container.center.mw-kartographer-link > img" )?.src, history: node.querySelector(".rellink.noprint.hatnote ~ p")?.innerText, places: "El puente del Diablo ", })); }); return cityInfo; };

const connect = async () => { try { const dbConnect = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, });

const cityInfo = await browserURL();

const allCities = await City.find();
if (allCities.length) await City.collection.drop();

const citySeed = await cityInfo.map((city) => new City(city));
await City.insertMany(citySeed);

const { name, host } = dbConnect.connection;
console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);

} catch (error) { console.error(No se ha podido conectar a la DB 💔, error); } };

browserURL();

connect();

const server = express();

server.use(cors());

server.listen(process.env.PORT, console.log("Puerto levantado"));
