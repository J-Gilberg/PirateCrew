const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const PirateCrewSchema = new mongoose.Schema({
    name: {
        type: String
        , required: [true, "Name is required"]
        , minlength: [2, "Name must be at least 2 characters long"]
        , maxlength: [40, "Name must be at less than 40 characters"]
    }
    ,image:{
        type: String
        ,required: [true, "Image is required"]
    }
    , numChests: {
        type: Number
        , required: [true, "Number of chests is required"]
        , min: [0, "You cant have negative amount of chests"]
    }
    , catchPhrase: {
        type: String
        , required: [true, "Catch Phrase is required"]
        , minlength: [3, "Catch Phrase must be at least 3 characters long"]
        , maxlength: [40, "Catch Phrase must be at less than 40 characters"]
    }
    , hookHand: {
        type: Boolean
        , required: [true, "Yes or No please"]
    }
    , eyePatch: {
        type: Boolean
        , required: [true, "Yes or No please"]
    }
    , pegLeg: {
        type: Boolean
        , required: [true, "Yes or No please"]
    }
    ,crewPosition: {
        type: String
        , required: [true, "Crew Position is required"]
        , minlength: [3, "Crew Position must be at least 3 characters long"]
        , maxlength: [40, "Crew Position must be at less than 40 characters"]
    }


}, { timestamps: true });

PirateCrewSchema.plugin(uniqueValidator);
module.exports.PirateCrew = mongoose.model('PirateCrew', PirateCrewSchema);
