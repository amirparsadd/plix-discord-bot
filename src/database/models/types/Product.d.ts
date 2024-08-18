import { Types } from "mongoose";

export interface IProduct {
  product_type: string,
  billing_type: string,
  active: boolean,
  price: number,
  owner: Types.ObjectId,
  createdAt: number,
  renewedAt: number
}