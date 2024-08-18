import { IInvoiceResult } from "./InvoiceResult";
import { IProductResult } from "./ProductResult";

export interface IUserResult {
  dbid: string,
  name: string,
  discord_id: string,
  rank: string,
  products: Array<IProductResult>,
  invoices: Array<IInvoiceResult>,
  // tickets: Array<ITicker>
}

//TODO EMERGENCY add ticket
