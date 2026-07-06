import mongoose, { Schema, Document } from 'mongoose'

export interface IWorkout extends Document {
  name: string
  description?: string
  durationMin?: number
  difficulty?: string
}

const WorkoutSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  durationMin: { type: Number },
  difficulty: { type: String }
})

const Workout = mongoose.model<IWorkout>('Workout', WorkoutSchema)
export default Workout
