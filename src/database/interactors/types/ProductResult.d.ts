
export interface IProductResult {
  dbid: string,
  product_type: string,
  billing_type: string,
  active: boolean,
  price: number,
  owner: string,
  createdAt: number,
  renewedAt: number
}