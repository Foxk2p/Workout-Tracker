const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

router.get('/workouts/:day', (req, res) => {
  Workout.find({ day: req.params.day })
    .then(workouts => res.json(workouts[0]))
    .catch(err => console.error(err))
})

router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
