import mongoose, { Schema, Document } from 'mongoose'

export interface IActivity extends Document {
  user: mongoose.Types.ObjectId
  type: string
  distanceKm?: number
  durationMin?: number
  date: Date
}

const ActivitySchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  distanceKm: { type: Number },
  durationMin: { type: Number },
  date: { type: Date, default: Date.now }
})

const Activity = mongoose.model<IActivity>('Activity', ActivitySchema)
export default Activity
