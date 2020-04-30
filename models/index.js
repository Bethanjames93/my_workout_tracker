const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excerises: [
        {
            type: {
                type: String,
                trim: true, 
                required: "What type of exercise: Cardio or Resistance?"
            },
            name: {
                type: String,
                trim: true,
                required: "Add the excerise name"
            },
            durtion: {
                type: Number,
                required: "What is the duration of the workout?"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;