const {User} = require('../models/User.models');

module.exports.newUser = (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.getOneUser = (req, res) => {
    console.log(req.body)
    User.findOne({ email: req.body.email, password: req.body.password })
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'failed', err }));
}


module.exports.allUsers = (req, res) => {
    User.find({})
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'failed', err }));
}
