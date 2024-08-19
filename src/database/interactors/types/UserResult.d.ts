import { IInvoiceResult } from "./InvoiceResult";
import { IProductResult } from "./ProductResult";
import { ITicketResult } from "./TicketResult";

export interface IUserResult {
  dbid: string,
  name: string,
  discord_id: string,
  rank: string,
  products: Array<string>,
  invoices: Array<string>,
  tickets: Array<string>
}
