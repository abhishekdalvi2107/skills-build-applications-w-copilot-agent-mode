import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json([{ id: 'activity1', type: 'run', distanceKm: 5 }])
})

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Activity logged' })
})

export default router
