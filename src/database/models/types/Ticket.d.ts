import { Types } from "mongoose";

export interface ITicket {
  author: Types.ObjectId,
  answer_author: Types.ObjectId,
  title: string,
  content: string,
  answer: string,
  status: string
}