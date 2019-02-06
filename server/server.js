let express = require('express');// without ./ automatically goes to node modules
let PORT = 5000;
let quotes = require('./quotes');

let app = express();// set to a variable so that you dont reset application for each .get and .use
//variable makes it so that when calling .listen(5000) they are still part of the same application and can call on eachother
app.use(express.static('server/public'));
app.get('/quotes',  (req, res) => {    
    
    res.send(quotes);
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
