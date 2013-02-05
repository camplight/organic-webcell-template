createdModifiedPlugin = require("mongoose-createdmodified").createdModifiedPlugin

module.exports.db = null # mongoose db connection
module.exports.io = null # socket.io server

module.exports.traceCallbackResults = (callback) ->
  return (err, results) ->
    console.log(results);
    callback(err, results)

module.exports.timestampify = (schema) ->
  schema.plugin createdModifiedPlugin, {index: true}

module.exports.searchify = (schema, populateFields) ->
  schema.static 'searchBy', (term, fields, callback) ->
    pattern = []
    for field in fields
      token = {}
      token[field] = { $regex: new RegExp(term, 'i') };

      if field == "value"
        try
          token[field] = parseFloat(term)
        catch e
          # silently ignore
        pattern.push token if token[field]
      else
        pattern.push token
    if populateFields
      @find({$or: pattern}).populate(populateFields).exec callback
    else
      @find({$or: pattern}).exec callback