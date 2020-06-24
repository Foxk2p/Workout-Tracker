// const router = require('express').Router()
// const { Workout } = require('../models')

// sequalize get route reference

// router.get('/', (req, res) => {
//   Burger.getBurgers(burgers => {
//     res.render('burgers', { burgers })
//   })
// })

// sequalize syntax applied

// router.get('/exercise', (req, res) => {
//   Workout.find(workouts => {
//     res.render('workouts', { workouts })
//   })
// })


// // mongoose get route reference

// router.get('/exercise', (req, res) => {
//   Workout.find()
//     .then(workout => res.render(workout))
//     .catch(err => console.error(err))
// })

// mongoose syntax applied

// router.get('/exercise', (req, res) => {
//   Workout.find()
//     .then(workouts => res.render(workouts))
//     .catch(err => console.error(err))
// })





// module.exports = router