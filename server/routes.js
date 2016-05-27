var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/users', controller.messages.get);

router.post('/users', controller.messages.post);

router.get('/trips', controller.users.get);

router.post('/trips', controller.users.post);


// router.get('/login', controller.login.get);

// router.post('/login', controller.login.post);


module.exports = router;