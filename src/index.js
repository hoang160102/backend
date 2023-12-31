const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const port = 3000;

const route = require('./routes');

const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'))
app.use(morgan('combined'));
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            inc: function(value, options){
              return parseInt(value) + 1;
            }
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
});
