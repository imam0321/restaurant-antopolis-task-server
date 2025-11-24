import { Feedback, Member } from "./common.model"

const getAllFeedbacks = async () => {
  return await Feedback.find({});
}

const getAllMembers = async () => {
  return await Member.find({});
}

export const CommonService = {
  getAllFeedbacks,
  getAllMembers
}