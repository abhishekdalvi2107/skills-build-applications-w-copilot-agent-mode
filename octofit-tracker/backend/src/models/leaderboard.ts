import mongoose, { Schema, Document } from 'mongoose'

export interface ILeaderboard extends Document {
  user: mongoose.Types.ObjectId
  points: number
}

const LeaderboardSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, default: 0 }
})

const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', LeaderboardSchema)
export default Leaderboard
