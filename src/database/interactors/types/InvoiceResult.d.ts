export interface IInvoiceResult {
  dbid: string,
  owner: string,
  reason: string,
  product: string,
  amount: number,
  status: string,
  createdAt: number,
  updatedAt: number,
  endDate: number
}