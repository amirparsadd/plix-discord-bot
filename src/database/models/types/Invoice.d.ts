import { Types } from "mongoose";

export interface IInvoice {
  owner: Types.ObjectId,
  reason: string,
  product: Types.ObjectId,
  amount: number,
  status: string,
  createdAt: number,
  updatedAt: number,
  endDate: number
}