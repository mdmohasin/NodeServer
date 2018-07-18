// var path = require('path');
import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';                      // for getting body in request
import indexRoutes from './routes/restDispatcher';

const app = express();
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// parse application/x-www-form-urlencoded   always call before route
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

/**
 * @see 'client/index.html'
 * view engine
 */
app.set('view engine', 'html');
app.engine('html', (pathHtml, options, callbacks) => {
    fs.readFile(pathHtml, 'utf-8', callbacks);
});

// middleware
app.use(express.static(path.join(__dirname, '../client')));

// routes
app.use('/', indexRoutes);

// usage with the fix of refresh issue accepts all the routes
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// error
app.use((err, req, res) => {
    res.status(err.status || 500);
    if (err) {
        console.log('error in startup', err);
        res.json({ success: false, result: err });
    }
});

module.exports = app;
