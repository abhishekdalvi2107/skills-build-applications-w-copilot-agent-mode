import mongoose, { Schema, Document } from 'mongoose'

export interface ITeam extends Document {
  name: string
  description?: string
}

const TeamSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String }
})

const Team = mongoose.model<ITeam>('Team', TeamSchema)
export default Team
