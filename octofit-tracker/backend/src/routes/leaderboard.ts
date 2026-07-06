import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json([{ userId: 'user1', points: 120 }, { userId: 'user2', points: 98 }])
})

export default router
