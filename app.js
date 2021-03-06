var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    server,
    routes = require('./routes').routes,
    users = require('./users');

app.disable('x-powered-by');
app.set('view engine', 'jade');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('HTTP METHOD: %s', req.method, req.url);
    console.log('HTTP URL: %s', req.url);
    next();
});

app.use(express.static(__dirname + '/public'));

app.post('/signin', function (req, res) {

    var response = { status : false, data : [], location : '/profile' };
    var user = users.findUser(req.body.login, req.body.password);

    if (user) {
        response.status = true;
        response.data = user;
    }

    res.send(JSON.stringify(response));

});

app.get('/tempo', function (req, res) {
    var data = {
        arr: [
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: '?', v1: 10, v2: 15, opp1: '+', opp2: '='},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
            {v0: 1, v1: 5, v2: '?', opp1: '+', opp2: '?'},
        ]
    };

    res.render('tempo', data);
});

app.get('/:page?', function (req, res) {

    var url = req.url;

    var pageSettings = '';
    if (url == '/') {
        pageSettings = routes['home'];
    }
    else {
        url = url.slice(1);
        pageSettings = routes[url];
    }

    if (!pageSettings) {
        res.status(404).render('404');
    }
    else {
        pageSettings.links = routes;
        res.render(pageSettings.view, pageSettings);
    }

});

server = app.listen(8080, function () {
    console.log('Application:8080');
});