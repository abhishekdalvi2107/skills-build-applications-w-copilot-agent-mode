import express from 'express'
import cors from 'cors'
import db from './config/database'
import usersRouter from './routes/users'
import teamsRouter from './routes/teams'
import activitiesRouter from './routes/activities'
import leaderboardRouter from './routes/leaderboard'
import workoutsRouter from './routes/workouts'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000

app.use(express.json())

// Codespaces-aware API URL support
// If running in Codespaces, a public preview hostname can be derived from CODESPACE_NAME
const codespaceName = process.env.CODESPACE_NAME
const defaultOrigin = codespaceName
  ? `https://${codespaceName}-5173.githubpreview.dev`
  : `http://localhost:5173`

app.use(
  cors({
    origin: (origin, cb) => {
      // allow frontend dev server or undefined (e.g., curl, server-to-server)
      if (!origin || origin === defaultOrigin) return cb(null, true)
      return cb(null, true)
    },
  })
)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// API routes
app.use('/api/users', usersRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/workouts', workoutsRouter)

app.listen(PORT, () => {
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.githubpreview.dev`
    : `http://localhost:${PORT}`
  console.log(`OctoFit backend listening on port ${PORT}`)
  console.log(`API available at ${apiUrl}`)
})
