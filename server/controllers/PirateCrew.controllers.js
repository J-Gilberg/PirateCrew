const { PirateCrew } = require('../models/PirateCrew.models');

module.exports.newSailor = (req, res) => {
    console.log(req.body);
    PirateCrew.create(req.body)
        .then(member => res.json({ results: member }))
        .catch(err => res.json({ message: 'failed', err }));
}
//.sort({name: 1})

module.exports.getCrew = (req, res) => {
    PirateCrew.find({}).sort({name: 1})
        .then(crew => res.json({ results: crew }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.getOneSailor = (req, res) => {
    PirateCrew.findOne({ _id: req.params._id })
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.getTheCaptain = (req, res) => {
    PirateCrew.findOne(req.body)
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.editSailor = (req, res) => {
    PirateCrew.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.deleteSailorByID = (req, res) => {
    PirateCrew.deleteOne({ _id: req.params._id })
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'failed', err }));
}