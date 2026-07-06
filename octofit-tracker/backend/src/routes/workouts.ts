import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json([{ id: 'workout1', name: '5k run', difficulty: 'medium' }])
})

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Workout created' })
})

export default router
