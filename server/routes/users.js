//var authenticationMiddleware = require('../middlewares/authentication.js'); //todo apply when needed
var userModel = require('../models/user.js');

var getUser = function(router){

  router.get('/api/users/:id', 
    function (req, res) {
      var userId = req.params.id;
      userModel.getUserProfile(userId, 
        function(result){
          return res.json(result);
        }
      );
    }
  );

}
module.exports = getUser;
