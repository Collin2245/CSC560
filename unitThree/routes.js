//routes.js
//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import game Controller
var gameController = require('./gameController');

// game routes
router.route('/game')
    .get(gameController.index)
    .post(gameController.add);
router.route('/game/:game_id')
    .get(gameController.view)
    .patch(gameController.update)
    .put(gameController.update)
    .delete(gameController.delete);
    
//Export API routes
module.exports = router;