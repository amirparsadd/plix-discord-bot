export interface IUserResult {
  dbid: string,
  balance: number,
  name: string,
  discord_id: string,
  rank: string,
  products: Array<string>,
  invoices: Array<string>,
  // tickets: Array<string>
  // ? Seemed Useless
}
