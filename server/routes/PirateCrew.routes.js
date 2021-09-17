const PirateCrewController = require('../controllers/PirateCrew.controllers');
module.exports = function(app){

    app.get('/api/pirates/all', PirateCrewController.getCrew);
    app.get('/api/pirates/:_id', PirateCrewController.getOneSailor);
    app.post('/api/pirates/captain', PirateCrewController.getTheCaptain);
    app.post('/api/pirates/new', PirateCrewController.newSailor);
    app.patch('/api/pirates/:_id/edit', PirateCrewController.editSailor);
    app.delete('/api/pirates/:_id/delete', PirateCrewController.deleteSailorByID);
}