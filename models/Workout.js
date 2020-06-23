const { Schema, model } = require('mongoose')

const workoutSchema = new Schema({
  day: {
    type: String,
    required: true,
    lowercase: true
  },
  exercises: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    sets: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

userSchema.virtual('totalWeight').get(function () {
  return this.exercises.reduce((t, exercise) => t + exercise.weight, 0)
})

module.exports = model('Workout', workoutSchema)
