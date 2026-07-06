import { Router } from 'express'
import Activity from '../models/activity'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const activities = await Activity.find().populate('user')
    res.json(activities)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch activities' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { user, type, distanceKm, durationMin, date } = req.body
    const activity = await Activity.create({ user, type, distanceKm, durationMin, date })
    res.status(201).json(activity)
  } catch (err) {
    res.status(500).json({ error: 'Failed to log activity' })
  }
})

export default router
