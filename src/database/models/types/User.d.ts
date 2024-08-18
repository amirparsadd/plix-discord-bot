import { Types } from "mongoose";

export interface IUser {
  uid: string,
  rank: string,
  products: Array<Types.ObjectId>,
  tickets: Array<Types.ObjectId>
}