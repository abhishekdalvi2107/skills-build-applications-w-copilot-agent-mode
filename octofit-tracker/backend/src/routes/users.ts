import { Router } from 'express'

const router = Router()

// Placeholder handlers for users
router.get('/', (_req, res) => {
  res.json([{ id: 'user1', name: 'Alice' }, { id: 'user2', name: 'Bob' }])
})

router.post('/', (_req, res) => {
  // In future: validate and create user using Mongoose models
  res.status(201).json({ message: 'User created' })
})

export default router
