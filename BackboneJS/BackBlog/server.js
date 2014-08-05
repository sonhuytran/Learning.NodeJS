/**
 * Created by M@ngTr@n on 04/08/2014.
 */

// Import libraries
var express = require('express');
var path = require('path');
var Bourne = require('bourne');

var app = express();
var posts = new Bourne('simpleBlogPosts.json');
var comments = new Bourne('simpleBlogComments.json');

app.configure(function () {
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/posts', function (request, response) {
    posts.find({}, function (error, results) {
        response.json(results);
    });
});

app.post('/posts', function (request, response) {
    posts.insert(request.body, function (error, result) {
        response.json(result);
    });
});

app.get('/*', function (request, response) {
    posts.find(function (error, results) {
        response.render('index.ejs', {posts: JSON.stringify(results)});
    });
});

app.listen(3000);