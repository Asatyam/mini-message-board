const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
  },
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index",{title: "Mini Message Board", messages:messages});
});
router.get('/new',function(req,res,next){
  res.render("form");
})
router.post('/new',function(req,res,next){
  
  messages.push({user:req.body.user, text:req.body.text, added: (new Date()).toLocaleDateString() });
  res.redirect('/');
  
})
module.exports = router;
