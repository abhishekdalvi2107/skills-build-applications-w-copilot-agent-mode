import { Router } from 'express'
import Team from '../models/team'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const teams = await Team.find()
    res.json(teams)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teams' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body
    const team = await Team.create({ name, description })
    res.status(201).json(team)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create team' })
  }
})

export default router
