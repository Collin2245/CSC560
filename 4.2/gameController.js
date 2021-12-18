//gameController.js

//Import game Model
Game = require("./gameModel");

//For index
exports.index = function (req, res) {
    Game.get(function (err, game) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got game Successfully!",
            data: game       
        });
    });
};
//For creating new game
exports.add = function (req, res) {
    var game = new Game();
    game.Name = req.body.Name? req.body.Name: game.Name;
    game.System = req.body.System;
    game.Genre = req.body.Genre;
    game.ReleaseDate = req.body.ReleaseDate;
//Save and check error
    game.save(function (err) {
        if (err)
        console.log(err)
    res.json({
            message: "New game Added!",
            data: game
        });
    });
};
// View game
exports.view = function (req, res) {
    Game.findById(req.params.game_id, function (err, game) {
        if (err)
            console.log(err)
        res.json({
            message: 'game Details',
            data: game
        });
    });
};
// Update game
exports.update = function (req, res) {
    Game.findById(req.params.game_id, function (err, game) {
        if (err)
            res.send(err);
            game.Name = req.body.Name? req.body.Name: game.Name;
            game.System = req.body.System;
            game.Genre = req.body.Genre;
            game.ReleaseDate = req.body.ReleaseDate;
//save and check errors
        game.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "game Updated Successfully",
                data: game
            });
        });
    });
};
// Delete game
exports.delete = function (req, res) {
    Game.deleteOne({
        _id: req.params.game_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'game Deleted'
        })
    })
}