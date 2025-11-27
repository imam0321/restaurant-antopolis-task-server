import { model, Schema } from "mongoose";

export interface IFeedback {
  _id?: string;
  name: string;
  position: string;
  description: string;
  profile: string
}

export interface IMember {
  _id?: string;
  name: string;
  position: string;
  profile: string
}

const feedbackSchema = new Schema<IFeedback>(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
    profile: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const memberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    profile: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const Feedback = model<IFeedback>("Feedback", feedbackSchema);
export const Member = model<IMember>("Member", memberSchema);