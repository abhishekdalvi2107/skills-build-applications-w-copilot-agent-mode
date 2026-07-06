import mongoose from 'mongoose'
import Team from '../models/team'
import User from '../models/user'
import Workout from '../models/workout'
import Activity from '../models/activity'
import Leaderboard from '../models/leaderboard'

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db'

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString)

    console.log('Connected to octofit_db')
    console.log('Seed the octofit_db database with test data')

    // Clear existing data
    await Promise.all([
      Leaderboard.deleteMany({}),
      Activity.deleteMany({}),
      Workout.deleteMany({}),
      User.deleteMany({}),
      Team.deleteMany({}),
    ])

    // Create teams
    const redTeam = await Team.create({ name: 'Red Octos', description: 'Fast and furious' })
    const blueTeam = await Team.create({ name: 'Blue Squids', description: 'Endurance specialists' })

    // Create users
    const alice = await User.create({ name: 'Alice', email: 'alice@example.com', team: redTeam._id })
    const bob = await User.create({ name: 'Bob', email: 'bob@example.com', team: blueTeam._id })
    const carol = await User.create({ name: 'Carol', email: 'carol@example.com', team: redTeam._id })

    // Create workouts
    const w1 = await Workout.create({ name: '5k Run', description: 'Beginner-friendly 5 kilometer run', durationMin: 30, difficulty: 'easy' })
    const w2 = await Workout.create({ name: 'Interval Sprints', description: 'High-intensity interval training', durationMin: 20, difficulty: 'hard' })

    // Create activities
    await Activity.create({ user: alice._id, type: 'run', distanceKm: 5, durationMin: 28, date: new Date() })
    await Activity.create({ user: bob._id, type: 'ride', distanceKm: 20, durationMin: 60, date: new Date() })
    await Activity.create({ user: carol._id, type: 'run', distanceKm: 10, durationMin: 55, date: new Date() })

    // Create leaderboard entries
    await Leaderboard.create({ user: alice._id, points: 150 })
    await Leaderboard.create({ user: bob._id, points: 120 })
    await Leaderboard.create({ user: carol._id, points: 80 })

    console.log('Inserted sample teams, users, workouts, activities, and leaderboard entries')

    console.log('Database seeding complete')
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
