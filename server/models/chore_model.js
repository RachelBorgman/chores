const mongoose = require('mongoose');

const ChoreSchema = new mongoose.Schema({

    choreName: { 
        type: String, 
        required: [true, "Chore Name Required"],
        minlength: [3, "Must be at least 3 characters long"]
    },
    choreDescription: { 
        type: String, 
        required: [true, "Chore Description Required"],
        min: [10, "Must be at least 10"]
    },
    choreLocation: { 
        type: String, 
        required: [true, "Chore Location Must Not be Blank"],
        min: [1, "Must be at least 1"]
    },
}, { timestamps: true });


const Chore = mongoose.model('Chore', ChoreSchema);

module.exports = Chore;