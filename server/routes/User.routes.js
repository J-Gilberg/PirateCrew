const UserController = require('../controllers/User.controllers');
module.exports = function(app){
    app.post('/api/users/one', UserController.getOneUser);
    app.post('/api/users/new', UserController.newUser);
    app.get('/api/users/all', UserController.allUsers);
}