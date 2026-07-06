import { Router } from 'express'
import Workout from '../models/workout'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const workouts = await Workout.find()
    res.json(workouts)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, description, durationMin, difficulty } = req.body
    const workout = await Workout.create({ name, description, durationMin, difficulty })
    res.status(201).json(workout)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create workout' })
  }
})

export default router
