let express = require('express');// without ./ automatically goes to node modules
let quotes = require('./quotes');
let app = express();


app.get('/quotes', function (req, res) {
    res.send(quotes);
});


app.listen(5000, function () {
    console.log('Running on port 5000');

});

