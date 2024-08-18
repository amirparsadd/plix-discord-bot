import { IUserResult } from "./UserResult"

export interface ITicketResult {
  dbid: string,
  author: IUserResult,
  answer_author: IUserResult,
  title: string,
  content: string,
  answer: string,
  status: string
}