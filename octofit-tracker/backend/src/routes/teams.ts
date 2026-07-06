import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json([{ id: 'team1', name: 'Red Octos' }])
})

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Team created' })
})

export default router
