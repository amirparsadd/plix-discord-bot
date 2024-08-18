import { IProductResult } from "./ProductResult";
import { IUserResult } from "./UserResult";

export interface IInvoiceResult {
  dbid: string,
  owner: IUserResult,
  reason: string,
  product: IProductResult,
  amount: number,
  status: string,
  createdAt: number,
  updatedAt: number,
  endDate: number
}