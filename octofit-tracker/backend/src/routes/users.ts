import { Router } from 'express'
import User from '../models/user'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const users = await User.find().populate('team')
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email, team } = req.body
    const user = await User.create({ name, email, team })
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' })
  }
})

export default router
