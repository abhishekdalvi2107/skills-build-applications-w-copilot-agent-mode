import { Router } from 'express'
import Leaderboard from '../models/leaderboard'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const entries = await Leaderboard.find().populate('user', 'name email')
    res.json(entries)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' })
  }
})

export default router
