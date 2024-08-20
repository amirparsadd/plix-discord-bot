import { Types } from "mongoose";

export interface IUser {
  name: string,
  balance: number
  discord_id: string,
  rank: string,
  products: Array<Types.ObjectId>,
  invoices: Array<Types.ObjectId>,
  tickets: Array<Types.ObjectId>
}