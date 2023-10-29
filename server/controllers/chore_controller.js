const Chore = require('../models/chore_model');

module.exports.createNewChore = (req, res) => {
    Chore.create(req.body)
        .then(chore => res.json(chore))
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.findAllChores = (req, res) => {
    Chore.find({})
        .then((allChores) => {
            res.json(allChores)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.findOneSingleChore = (req, res) => {
    Chore.findOne({ _id: req.params.id })
        .then(oneSingleChore => {
            res.json(oneSingleChore)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.updateExistingChore = (req, res) => {
    console.log(req.params)
    Chore.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedChore => {
            console.log("THIS IS UPDATED chore BEFORE RES.JSON: ", updatedChore)
            res.json(updatedChore)
            console.log("THIS IS UPDATED chore AFTER RES.JSON: ", updatedChore)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}

module.exports.deleteAnExistingChore = (req, res) => {
    Chore.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
}