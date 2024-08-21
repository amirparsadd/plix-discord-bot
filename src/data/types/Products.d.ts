export interface ICategory {
  id: string,
  category: string,
  desc: string,
  additional: string
  products: Array<IProduct>
}

export interface IProduct {
  id: string,
  type: ProductType | string,
  name: string,
  info: string,
  billing: ProductBillingType | string,
  price: number
}

export type ProductType = "MINECRAFT" | "TEAMSPEAK" | "DOMAIN" | "SERVICES"
export type ProductBillingType = "ONCE" | "MONTHLY" | "YEARLY"

export interface Mapped<K> {
  [key: string]: K
} 