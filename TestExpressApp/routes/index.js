var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name?', function (req, res, next) {
  var user = null;
  if (req.params.name)
    user = { name: req.params.name };

  res.render('index', {
    title: 'Express',
    list: [
      { text: 'baidu', url: 'http://www.baidu.com/' },
      { text: 'Google', url: 'http://www.google.com/' }
    ],
    user: user
  });
});

module.exports = router;
