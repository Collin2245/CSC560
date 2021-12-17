//gameModel.js
var mongoose = require('mongoose');
//schema
//   var mario = {"Name":"Super Mario Bros.","System":["NES"],"Genre":["Platform"],"Release Date":{"$date":{"$numberLong":"495439200000"}}}
var gameSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    System: [{
        type: String,
        required: true
    }],
    Genre: [{
        type: String,
        required: true
    }],
    ReleaseDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});
// Export game Model
var Game = module.exports = mongoose.model('game', gameSchema);
module.exports.get = function (callback, limit) {
   Game.find(callback).limit(limit); 
}