import { productModel } from "../models/Product"
import { convertByDBID as convertUserByDBID } from "./User"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/Product").IProduct>} productDocument
 * @returns {import("./types/ProductResult").IProductResult}
 */
export function convert(productDocument){
  if(productDocument == null) return null

  return {
    dbid: productDocument._id.toString(),
    product_type: productDocument.product_type,
    billing_type: productDocument.billing_type,
    active: productDocument.active,
    price: productDocument.price,
    owner: convertUserByDBID(productDocument.owner.toString()),
    createdAt: productDocument.createdAt,
    updatedAt: productDocument.updatedAt,
  }
}

/**
 * 
 * @param {String} dbid
 * @returns {import("./types/ProductResult").IProductResult}
 */
export function convertByDBID(dbid){
  const productDocument = productModel.findById(dbid)

  if(productDocument == null) return null

  return convert(productDocument)
}