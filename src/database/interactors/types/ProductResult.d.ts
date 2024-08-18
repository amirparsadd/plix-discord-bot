import { IUserResult } from "./UserResult";

export interface IProductResult {
  dbid: string,
  product_type: string,
  billing_type: string,
  active: boolean,
  price: number,
  owner: IUserResult,
  createdAt: number,
  renewedAt: number
}