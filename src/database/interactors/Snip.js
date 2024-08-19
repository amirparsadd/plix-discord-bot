import { snipModel } from "../models/Snip.js"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/Snip").ISnip>} snipDocument
 * @returns {import("./types/SnipResult").ISnipResult}
 */
export function convert(snipDocument){
  if(snipDocument == null) return null

  return {
    dbid: snipDocument._id.toString(),
    id: snipDocument.uid,
    author_name: snipDocument.author_name,
    content: snipDocument.content
  }
}

/**
 * 
 * @param {String} dbid
 * @returns {import("./types/SnipResult").ISnipResult}
 */
export function convertByDBID(dbid){
  const snipDocument = snipModel.findById(dbid)

  if(snipDocument == null) return null

  return convert(snipDocument)
}