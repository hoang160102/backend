const newsRouter = require('./new');
const siteRouter = require('./site');
const courseRouter = require('./courseRoute');
function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })
    app.use('/news', newsRouter);
    app.use('/course', courseRouter);
    app.use('/', siteRouter);
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })

    //   app.get('/search', (req, res) => {
    //     res.render('search');
    //   })

    //   app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.send('');
    //   })
}

module.exports = route;
