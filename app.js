var express = require('express');
var app = express();
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var paginate 	= require('express-paginate');
var swaggerUi 	= require('swagger-ui-express');

var JsonRefs 	= require('json-refs');
var YAML 		= require('js-yaml');

require('./models/db');

var cors = require('cors'); // call the cors to fix access control bug.

app.use(cors());

var routesApi = require('./routes/index');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser({limit: '50mb'}));

app.use(cookieParser());

app.use(paginate.middleware(10, 50)); // limit=10,  maxLimit=50

app.use(express.static(path.join(__dirname, 'quiz-frontend', 'app')));

app.use(express.static(path.join(__dirname, 'node_modules/swagger-ui-express/static')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads/media', express.static(path.join(__dirname, 'uploads/media')));

// app.get('/', function (req, res) {
//     res.json({message: "Welcome to our Quiz!"});
// });

var optionsRef 	= {
    filter: ['relative', 'remote'],
    loaderOptions: {
        processContent: function (res, cb) {
            cb(undefined, YAML.safeLoad(res.text));
        }
    }
};

JsonRefs.resolveRefsAt('./swagger/index.yaml', optionsRef).then(function (results) {
    // console.log(results.resolved);
    // console.log("================refs ",results.refs);
    app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(results.resolved));
}, function (err) {
    console.log(err.stack);
});

app.use('/api', routesApi);


module.exports = app;
