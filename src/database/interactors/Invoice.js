import { invoiceModel } from "../models/Invoice.js"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/Invoice").IInvoice>} invoiceDocument
 * @returns {import("./types/InvoiceResult").IInvoiceResult}
 */
export function convert(invoiceDocument){
  if(invoiceDocument == null) return null

  return {
    dbid: invoiceDocument._id.toString(),
    owner: invoiceDocument.owner.toString(),
    reason: invoiceDocument.reason,
    product: invoiceDocument.product.toString,
    amount: invoiceDocument.amount,
    status: invoiceDocument.status,
    createdAt: invoiceDocument.createdAt,
    updatedAt: invoiceDocument.updatedAt,
    endDate: invoiceDocument.endDate
  }
}

/**
 * 
 * @param {String} dbid
 * @returns {import("./types/InvoiceResult").IInvoiceResult}
 */
export function convertByDBID(dbid){
  const invoiceDocument = invoiceModel.findById(dbid)

  if(invoiceDocument == null) return null

  return convert(invoiceDocument)
}