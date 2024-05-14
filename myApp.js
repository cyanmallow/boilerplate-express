let express = require('express');
let app = express();
require('dotenv').config();
require('body-parser').config();

const path = require('path');

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'))
// })

// app.use('/public', express.static(path.join(__dirname, 'public')))

// app.get('/json', (req, res) => {
//     let message = "Hello json";
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         message = message.toUpperCase();
//     }
//     res.json({ "message": message });
// });

// function logger(req, res, next){
//     const method = req.method;
//     const path = req.path;
//     const ip = req.ip;
//     console.log(`${method} ${path} - ${ip}`);
//     next();
// }

// app.use(logger);

// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString();
//     const currentTime = req.time;
//     next();
// }, (req, res) => {
//     res.json({time: req.time});
// })
    
// app.get('/:word/echo', (req, res) => {
//     let word = req.params.word;
//     res.json({echo: word});
// })

// app.get('/name', (req, res) => {
//     // The first and last name parameters should be 
//     // encoded in a query string e.g. 
//     // ?first=firstname&last=lastname
//     const firstname = req.query.first;
//     const lastname = req.query.last;
//     res.json({ name: `${firstname} ${lastname}`});
// })




























 module.exports = app;

