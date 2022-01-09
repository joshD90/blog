const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cutString = require(__dirname + '/cutString.js');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let blogTitle = [];
let blogBody = [];
let cutBody = [];


app.get('/', (req, res) => {
  res.render('index', {
    blogTitle: blogTitle,
    blogBody: cutBody
  });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/addBlog', (req, res) => {
  res.render('addBlog');
});

app.post('/', (req, res) => {


  blogTitle.push(req.body.titleInput);
  blogBody.push(req.body.bodyInput);
  cutBody.push(cutString(req.body.bodyInput));
  res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on' + process.env.PORT + " or on the local Host 3000");
})